import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Label might not be needed if using FormLabel
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast"; // Or use sonner

// Define the form schema with Zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).regex(/^\+?[0-9\s\-()]+$/, { message: "Invalid phone number format." }),
  age: z.coerce.number().min(18, { message: "You must be at least 18 years old." }).max(100, { message: "Please enter a valid age." }),
  interest: z.string().min(3, { message: "Please specify your creative field/interest." }),
  instagram: z.string().optional(),
  confirmationCode: z.string().optional(), // Optional initially, required in step 2
});

type FormData = z.infer<typeof formSchema>;

// Internal component for the form content
const MembershipFormContent = ({
  form,
  formStep,
  isSubmitting,
  onSubmit,
  setFormStep,
  tierName, // Destructure tierName
  price, // Destructure price
}: {
  form: ReturnType<typeof useForm<FormData>>;
  formStep: number;
  isSubmitting: boolean;
  onSubmit: (values: FormData) => void;
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
  tierName: string; // Added prop
  price: number; // Added prop
}) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
        {formStep === 1 && (
          <>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+254 7XX XXX XXX" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="18" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Creative Field/Interest</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Music Production, DJ, Fashion" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Handle (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="@yourhandle" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {formStep === 2 && (
          <>
            <div className="space-y-2 text-sm bg-blue-900/30 p-4 rounded-md">
              <p className="font-semibold text-event-neon">Payment Instructions for {tierName}:</p> {/* Use tierName */}
              <p>Send KES {price.toLocaleString()} to Mpesa Till Number:</p> {/* Use price */}
              <p className="font-bold text-lg">5476447 (Afrotape Entertainment)</p>
              <p className="mt-2">After sending, enter the Mpesa confirmation code below.</p>
            </div>
            <FormField
              control={form.control}
              name="confirmationCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mpesa Confirmation Code</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., SFD8G..." {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <DialogFooter>
          {formStep === 2 && (
             <Button type="button" variant="outline" onClick={() => setFormStep(1)} disabled={isSubmitting}>
               Back
             </Button>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : (formStep === 1 ? "Proceed to Payment" : "Confirm Registration")}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

// Define props for the main dialog component
interface MembershipFormDialogProps {
  trigger: React.ReactNode;
  tierName: string;
  price: number;
}

// Main Dialog Component that manages state and renders the Dialog with the trigger
export function MembershipFormDialog({ trigger, tierName, price }: MembershipFormDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formStep, setFormStep] = useState(1); // 1: Initial form, 2: Confirmation code
  const [formData, setFormData] = useState<FormData | null>(null); // Store step 1 data
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: undefined,
      interest: "",
      instagram: "",
      confirmationCode: "",
    },
  });

  async function onSubmitStep1(values: FormData) {
    setFormData(values);
    setFormStep(2);
  }

  async function onSubmitStep2(values: FormData) {
    if (!formData) return;

    const finalData = { ...formData, confirmationCode: values.confirmationCode };

    if (!finalData.confirmationCode || finalData.confirmationCode.trim() === "") {
      form.setError("confirmationCode", { type: "manual", message: "Confirmation code is required." });
      return;
    }

    setIsSubmitting(true);
    console.log("Submitting final data:", finalData);

    try {
      const response = await fetch("https://hook.eu2.make.com/rgq9b6mct3ysh9h429i8jg4g45q7wlun", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
      }

      console.log("Webhook successful");
      toast({
        title: "Registration Submitted!",
        description: "Your membership request has been received. We will approve it upon payment confirmation.",
      });
      setIsOpen(false); // Close dialog on success

    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: `An error occurred: ${error instanceof Error ? error.message : "Unknown error"}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const currentOnSubmit = formStep === 1 ? onSubmitStep1 : onSubmitStep2;

  const handleOpenChange = (open: boolean) => {
     setIsOpen(open);
     if (!open) {
       // Reset form state if dialog is closed/cancelled
       setTimeout(() => { // Delay reset to allow closing animation
         setFormStep(1);
         form.reset();
         setFormData(null);
         setIsSubmitting(false);
       }, 300);
     }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Become a LiveStyle Member</DialogTitle>
          <DialogDescription>
            {formStep === 1
              ? "Fill out the form below to start your membership application."
              : "Confirm your payment to complete registration."}
          </DialogDescription>
        </DialogHeader>
        <MembershipFormContent
          form={form}
          formStep={formStep}
          isSubmitting={isSubmitting}
          onSubmit={currentOnSubmit}
          setFormStep={setFormStep}
          tierName={tierName} // Pass down props
          price={price} // Pass down props
        />
      </DialogContent>
    </Dialog>
  );
}
