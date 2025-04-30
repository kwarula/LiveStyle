import React, { useState, useEffect } from "react"; // Import React
import { Button } from "@/components/ui/button";
import { MembershipFormDialog } from "./MembershipForm"; // Import the dialog
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-event-dark/90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-event-light">
            LiveStyle
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection("event")} className="text-event-light hover:text-event-neon transition-colors">
            Event Info
          </button>
          <button onClick={() => scrollToSection("artists")} className="text-event-light hover:text-event-neon transition-colors">
            Artists
          </button>
          <button onClick={() => scrollToSection("venue")} className="text-event-light hover:text-event-neon transition-colors">
            Venue
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-event-light hover:text-event-neon transition-colors">
            Contact
          </button>
          {/* Add Membership Link */}
          <Link to="/membership" className="text-event-light hover:text-event-neon transition-colors">
            Membership
          </Link>
          {/* Membership Button */}
          <MembershipFormDialog 
            trigger={
              <Button variant="outline" className="border-event-neon text-event-neon hover:bg-event-neon hover:text-event-dark">
                Become a Member
              </Button>
            } 
          />
        </div>
        {/* Mobile/smaller screens might need a different layout or menu */}
        <div className="flex items-center space-x-2 md:hidden">
           <MembershipFormDialog 
            trigger={
              <Button size="sm" variant="outline" className="border-event-neon text-event-neon hover:bg-event-neon hover:text-event-dark">
                Member
              </Button>
            } 
          />
          <Button size="sm" onClick={() => scrollToSection("rsvp")} className="bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold">
            RSVP
          </Button>
        </div>
         {/* Keep original RSVP button for larger screens if needed, or adjust layout */}
         <Button onClick={() => scrollToSection("rsvp")} className="hidden md:inline-flex bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold">
           RSVP Now
         </Button>
      </div>
    </nav>;
};
export default Navbar;
