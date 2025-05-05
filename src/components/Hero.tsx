import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToRSVP = () => {
    const element = document.getElementById("rsvp");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-event-blue to-event-blue/80"></div>
        {/* Animated palm tree silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-20">
          <div className="absolute bottom-0 left-5 w-48 h-48 animate-float">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" className="text-event-light h-full w-full">
              <path d="M50,90 L55,90 L55,50 C60,45 65,35 60,25 C70,30 75,40 70,50 C80,45 85,35 80,25 C85,30 85,40 80,50 C90,47 95,40 90,30 C95,40 90,50 85,55 L85,90 L90,90 L90,100 L50,100 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-5 w-40 h-40 animate-float" style={{
          animationDelay: "1s"
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" className="text-event-light h-full w-full">
              <path d="M50,90 L55,90 L55,50 C60,45 65,35 60,25 C70,30 75,40 70,50 C80,45 85,35 80,25 C85,30 85,40 80,50 C90,47 95,40 90,30 C95,40 90,50 85,55 L85,90 L90,90 L90,100 L50,100 Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="event-container relative z-10 text-center">
        <div className="animate-fade-in">
          <p className="text-event-light opacity-90 mb-2">THE LIVESTYLE DIANI PRESENTS</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="text-event-neon neon-glow">PRE-GAME</span> <br className="md:hidden" />
            <span className="text-event-light">FRIDAY</span>
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm py-4 px-6 rounded-lg inline-block mb-8">
            <p className="text-xl md:text-2xl font-medium mb-2">
              MAY 9TH, 2025 • 3PM - 9PM
            </p>
            <p className="text-lg md:text-xl mb-1">
              Soul Culture Hub - Soul Breeze Beach Resort, Diani
            </p>
            <p className="text-event-neon font-bold">
              ENTRY: Ladies Free - Gents: KES 300
            </p>
          </div>
          
          <Button onClick={scrollToRSVP} className="bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold text-lg px-8 py-6 rounded-full animate-pulse-slow">
            GET TICKETS <ArrowRight className="ml-2" size={20} />
          </Button>
          
          <p className="mt-6 text-event-light/80">
            Featuring Dogo la Diani • DJ Bever • DJ Ricky
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-event-light opacity-70">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;
