
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import Artists from "@/components/Artists";
import Venue from "@/components/Venue";
import Countdown from "@/components/Countdown";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Import Dialog components for flyer
import { MembershipFormDialog } from "@/components/MembershipForm"; // Import Membership Dialog
import { Button } from "@/components/ui/button"; // Import Button

const Index = () => {
  useEffect(() => {
    // Add scroll animation for elements
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add("show");
        }
      });
    };
    
    // Initial check
    animateOnScroll();
    
    // Add event listener
    window.addEventListener("scroll", animateOnScroll);
    
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-event-blue text-event-light">
      <Navbar />
      <Hero />
      <Countdown />
      {/* Add Event Flyer Section */}
      <section className="section-padding bg-event-dark">
        <Dialog>
          <DialogTrigger asChild>
            <img 
              src="/Kym Ricky.png" 
              alt="Diani Beach Bash Vibes Flyer" 
              className="block mx-auto rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity max-w-full md:max-w-2xl" 
            />
          </DialogTrigger>
          <DialogContent className="max-w-none w-auto p-0 bg-transparent border-none">
            <img 
              src="/Kym Ricky.png" 
              alt="Diani Beach Bash Vibes Flyer" 
              className="max-h-[90vh] w-auto object-contain"
            />
          </DialogContent>
        </Dialog>
      </section>
      <EventInfo />
      <Artists />
      <Venue />
      {/* Add Membership CTA Section */}
      <section className="section-padding bg-event-blue text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the <span className="text-event-neon">LiveStyle</span> Community
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-event-light/80">
          Become a member for exclusive perks, early access to events, and more!
        </p>
        <MembershipFormDialog 
          trigger={
            <Button size="lg" className="bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold px-8 py-3">
              Become a Member
            </Button>
          } 
        />
      </section>
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;
