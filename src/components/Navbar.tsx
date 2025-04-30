import React, { useState, useEffect } from "react"; // Import React
import { Button } from "@/components/ui/button";
import { MembershipFormDialog } from "./MembershipForm"; // Import the dialog
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"; // Import Sheet components
import { Menu } from "lucide-react"; // Import Menu icon

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

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
            tierName="Standard Access" // Added default tier
            price={2000} // Added default price
            trigger={
              <Button variant="outline" className="border-event-neon text-event-neon hover:bg-event-neon hover:text-event-dark">
                Become a Member
              </Button>
            }
          />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-event-light" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-event-dark text-event-light border-l-event-blue/50 w-[250px] sm:w-[300px]">
              <div className="flex flex-col space-y-4 pt-8">
                <SheetClose asChild>
                  <button onClick={() => scrollToSection("event")} className="text-lg text-event-light hover:text-event-neon transition-colors text-left">
                    Event Info
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => scrollToSection("artists")} className="text-lg text-event-light hover:text-event-neon transition-colors text-left">
                    Artists
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => scrollToSection("venue")} className="text-lg text-event-light hover:text-event-neon transition-colors text-left">
                    Venue
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => scrollToSection("contact")} className="text-lg text-event-light hover:text-event-neon transition-colors text-left">
                    Contact
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/membership" className="text-lg text-event-light hover:text-event-neon transition-colors">
                    Membership
                  </Link>
                </SheetClose>
                <div className="pt-4 space-y-3">
                  <MembershipFormDialog
                    tierName="Standard Access" // Added default tier
                    price={2000} // Added default price
                    trigger={
                      <Button variant="outline" className="w-full border-event-neon text-event-neon hover:bg-event-neon hover:text-event-dark">
                        Become a Member
                      </Button>
                    }
                    // Removed onOpenChange to fix TS error - this comment might be outdated now
                  />
                  <SheetClose asChild>
                     <Button onClick={() => scrollToSection("rsvp")} className="w-full bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold">
                       RSVP Now
                     </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          {/* Original mobile buttons (can be removed or kept depending on design preference) */}
          {/* <MembershipFormDialog
            trigger={
              <Button size="sm" variant="outline" className="border-event-neon text-event-neon hover:bg-event-neon hover:text-event-dark ml-2">
                Member (Dialog)
              </Button>
            }
          />
          <Button size="sm" onClick={() => scrollToSection("rsvp")} className="bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold ml-2">
            RSVP (Scroll)
          </Button> */}
        </div>
        {/* Keep original RSVP button for larger screens */}
        <Button onClick={() => scrollToSection("rsvp")} className="hidden md:inline-flex bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold">
          RSVP Now
        </Button>
      </div>
    </nav>;
};
export default Navbar;
