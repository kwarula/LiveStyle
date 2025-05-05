import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Keep Label or switch to FormLabel
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel, // Use FormLabel for consistency
  FormMessage,
} from "@/components/ui/form";

// Define Zod schema for validation
const rsvpFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).regex(/^\+?[0-9\s\-()]+$/, { message: "Invalid phone number format." }),
  guests: z.coerce.number().min(1, { message: "At least one guest required." }).max(10, { message: "Maximum 10 guests allowed." }),
});

type RsvpFormData = z.infer<typeof rsvpFormSchema>;

const RSVP = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: 1, // Default to 1 guest
    },
  });

  async function onSubmit(values: RsvpFormData) {
    setIsSubmitting(true);
    console.log("Submitting RSVP data:", values);

    try {
      const response = await fetch("https://hook.eu2.make.com/tf93kdykuw8nf1rtqxekpp8if3m15y1j", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Ensure data mapping matches expected fields
        body: JSON.stringify({
          Name: values.name, // Map to 'Name'
          Email: values.email, // Map to 'Email'
          Phone: values.phone, // Map to 'Phone'
          NumberOfGuests: values.guests, // Map to 'NumberOfGuests'
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
      }

      console.log("RSVP Webhook successful");
      toast({
        title: "RSVP Successful!",
        description: "We've received your RSVP. See you there!",
        duration: 5000,
      });
      form.reset(); // Reset form fields on success

    } catch (error) {
      console.error("RSVP Submission error:", error);
      toast({
        title: "RSVP Failed",
        description: `An error occurred: ${error instanceof Error ? error.message : "Unknown error"}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="rsvp" className="section-padding bg-event-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-palm-pattern bg-repeat opacity-20"></div>
      </div>
      
      <div className="event-container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-event-neon">SECURE</span> YOUR SPOT
        </h2>
        
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">RSVP Details</h3>
              <p className="mb-6 text-event-light/90">
                Reserve your spot for LiveStyle now! Entry fee is <span className="text-event-neon font-bold">Ladies Free - Gents: KES 300</span> payable at the door.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="bg-event-neon/20 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-event-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Limited Capacity</p>
                    <p className="text-sm text-event-light/70">RSVP to guarantee entry</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-event-neon/20 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-event-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Pay at Entry</p>
                    <p className="text-sm text-event-light/70">Ladies Free - Gents: KES 300</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-event-neon/20 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-event-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Bring Friends</p>
                    <p className="text-sm text-event-light/70">Group packages available</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-event-neon/10 border border-event-neon/30 p-4 rounded-lg">
                <h4 className="text-event-neon font-bold mb-2">PAYMENT METHODS</h4>
                <p className="text-sm text-event-light/90">
                  Cash and M-Pesa accepted at entry.
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">RSVP Form</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-white/10 border-white/20 text-event-light" disabled={isSubmitting} />
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
                          <Input type="email" {...field} className="bg-white/10 border-white/20 text-event-light" disabled={isSubmitting} />
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
                          <Input type="tel" {...field} className="bg-white/10 border-white/20 text-event-light" disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" max="10" {...field} className="bg-white/10 border-white/20 text-event-light" disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "RESERVE MY SPOT"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
