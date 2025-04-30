import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MembershipFormDialog } from "@/components/MembershipForm";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Membership = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if URL has #form hash and scroll to form
    if (window.location.hash === "#form" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
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

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-event-dark text-event-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video or Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-event-dark/70 z-10"></div>
          <img 
            src="/membership-bg.jpg" 
            alt="LiveStyle Events" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-scroll">
            <span className="block">Not Everyone Gets In.</span>
            <span className="block mt-2 text-event-neon">Only the Bold, the Creative, the Obsessed.</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-event-light/90 animate-on-scroll">
            Welcome to the LiveStyle Inner Circle — where visionaries gather, deals are made, 
            culture is shaped, and the scene begins before it hits the streets.
          </p>
          
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold px-8 py-6 text-lg animate-on-scroll"
          >
            Become a Member Now →
          </Button>
        </div>
      </section>
      
      {/* What You Get Section - Completely Redesigned */}
      <section className="py-24 bg-gradient-to-b from-event-blue to-event-dark relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-event-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-event-dark to-transparent"></div>
        <div className="absolute inset-0 bg-palm-pattern opacity-5"></div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-event-neon/5 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-event-neon/5 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
              What You <span className="text-event-neon">Get</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-event-light/80 animate-on-scroll">
              The LiveStyle membership unlocks exclusive experiences and opportunities that aren't available anywhere else.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature Card 1 */}
            <div className="group bg-event-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-event-light/10 hover:border-event-neon/30 transition-all duration-300 animate-on-scroll hover:shadow-[0_0_25px_rgba(197,255,48,0.15)] transform hover:-translate-y-1">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-event-neon/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  🪩
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-event-neon transition-colors">Private Invites</h3>
                <p className="text-event-light/70 group-hover:text-event-light/90 transition-colors">
                  Early access to secret events, popups, and pre-game meetups before they're announced to the public.
                </p>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-event-light/60 italic">
                    "Our last secret event had Blinky Bill perform for just 50 members"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Card 2 */}
            <div className="group bg-event-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-event-light/10 hover:border-event-neon/30 transition-all duration-300 animate-on-scroll hover:shadow-[0_0_25px_rgba(197,255,48,0.15)] transform hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-event-neon/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  👥
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-event-neon transition-colors">Network</h3>
                <p className="text-event-light/70 group-hover:text-event-light/90 transition-colors">
                  Connect with creatives, investors, producers, DJs, and tastemakers who are shaping Kenya's cultural landscape.
                </p>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-event-light/60 italic">
                    "Members-only WhatsApp groups and Telegram channels for real-time connections"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Card 3 */}
            <div className="group bg-event-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-event-light/10 hover:border-event-neon/30 transition-all duration-300 animate-on-scroll hover:shadow-[0_0_25px_rgba(197,255,48,0.15)] transform hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-event-neon/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  🏝️
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-event-neon transition-colors">Lifestyle Retreats</h3>
                <p className="text-event-light/70 group-hover:text-event-light/90 transition-colors">
                  Inner Circle-only day experiences, curated travel moments to exclusive locations around Kenya.
                </p>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-event-light/60 italic">
                    "Our Lamu retreat sold out in 24 hours and created 6 new business partnerships"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Card 4 */}
            <div className="group bg-event-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-event-light/10 hover:border-event-neon/30 transition-all duration-300 animate-on-scroll hover:shadow-[0_0_25px_rgba(197,255,48,0.15)] transform hover:-translate-y-1" style={{ animationDelay: '0.3s' }}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-event-neon/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎤
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-event-neon transition-colors">Creative Stage</h3>
                <p className="text-event-light/70 group-hover:text-event-light/90 transition-colors">
                  First dibs to perform, showcase, host, and collaborate at LiveStyle events and partner venues.
                </p>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-event-light/60 italic">
                    "3 of our members got signed after performing at our showcase events"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Card 5 */}
            <div className="group bg-event-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-event-light/10 hover:border-event-neon/30 transition-all duration-300 animate-on-scroll hover:shadow-[0_0_25px_rgba(197,255,48,0.15)] transform hover:-translate-y-1" style={{ animationDelay: '0.4s' }}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-event-neon/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  🧠
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-event-neon transition-colors">Think Tanks</h3>
                <p className="text-event-light/70 group-hover:text-event-light/90 transition-colors">
                  Closed creative sessions to build future formats, concepts, and launches with industry leaders.
                </p>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-event-light/60 italic">
                    "Our monthly brainstorming sessions have launched 2 new festival concepts"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Card 6 */}
            <div className="group bg-event-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-event-light/10 hover:border-event-neon/30 transition-all duration-300 animate-on-scroll hover:shadow-[0_0_25px_rgba(197,255,48,0.15)] transform hover:-translate-y-1" style={{ animationDelay: '0.5s' }}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-event-neon/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  🛠
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-event-neon transition-colors">Member Tools</h3>
                <p className="text-event-light/70 group-hover:text-event-light/90 transition-colors">
                  Resources, discounted production time, AI collab tools, and studio access (coming soon).
                </p>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-event-light/60 italic">
                    "Members get 30% off at partner studios and production houses"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Feature Showcase */}
          <div className="mt-20 max-w-4xl mx-auto bg-event-dark/60 backdrop-blur-md rounded-2xl border border-event-light/10 overflow-hidden animate-on-scroll">
            <div className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Upcoming <span className="text-event-neon">Member-Only</span> Events
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-event-blue/20 p-4 rounded-lg border border-event-light/5 hover:border-event-neon/20 transition-all duration-300 cursor-pointer group">
                  <div className="text-xl font-bold mb-2 group-hover:text-event-neon transition-colors">May 15</div>
                  <p className="text-event-light/80">Secret Beach Party</p>
                  <div className="mt-2 text-xs text-event-neon">Members Only</div>
                </div>
                
                <div className="bg-event-blue/20 p-4 rounded-lg border border-event-light/5 hover:border-event-neon/20 transition-all duration-300 cursor-pointer group">
                  <div className="text-xl font-bold mb-2 group-hover:text-event-neon transition-colors">June 3</div>
                  <p className="text-event-light/80">Studio Session w/ Blinky</p>
                  <div className="mt-2 text-xs text-event-neon">Inner Circle+</div>
                </div>
                
                <div className="bg-event-blue/20 p-4 rounded-lg border border-event-light/5 hover:border-event-neon/20 transition-all duration-300 cursor-pointer group">
                  <div className="text-xl font-bold mb-2 group-hover:text-event-neon transition-colors">June 22</div>
                  <p className="text-event-light/80">Lamu Creator Retreat</p>
                  <div className="mt-2 text-xs text-event-neon">Limited Spots</div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={scrollToForm}
                  variant="outline" 
                  className="border-event-neon text-event-neon hover:bg-event-neon hover:text-event-dark"
                >
                  Join to Access Events
                </Button>
              </div>
            </div>
          </div>
          
          {/* Member Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-on-scroll">
            <div className="bg-event-dark/30 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-event-neon mb-2">438</div>
              <p className="text-event-light/70 text-sm">Active Members</p>
            </div>
            
            <div className="bg-event-dark/30 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-event-neon mb-2">24</div>
              <p className="text-event-light/70 text-sm">Events Per Year</p>
            </div>
            
            <div className="bg-event-dark/30 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-event-neon mb-2">6</div>
              <p className="text-event-light/70 text-sm">Cities</p>
            </div>
            
            <div className="bg-event-dark/30 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-event-neon mb-2">∞</div>
              <p className="text-event-light/70 text-sm">Possibilities</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who This is For Section */}
      <section className="py-20 bg-event-dark bg-palm-pattern bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-on-scroll">
            Who This is <span className="text-event-neon">For</span>
          </h2>
          
          <p className="text-xl text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            "We're not for everyone. We're for the ones who build the wave, not ride it."
          </p>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-event-blue/10 p-6 rounded-lg border border-event-neon/20 animate-on-scroll">
              <h3 className="text-xl font-bold mb-2">Local creators hungry to scale their brand</h3>
            </div>
            
            <div className="bg-event-blue/10 p-6 rounded-lg border border-event-neon/20 animate-on-scroll">
              <h3 className="text-xl font-bold mb-2">Kenyan returnees & diaspora looking to plug into culture</h3>
            </div>
            
            <div className="bg-event-blue/10 p-6 rounded-lg border border-event-neon/20 animate-on-scroll">
              <h3 className="text-xl font-bold mb-2">Tourists who want real access, not TripAdvisor lies</h3>
            </div>
            
            <div className="bg-event-blue/10 p-6 rounded-lg border border-event-neon/20 animate-on-scroll">
              <h3 className="text-xl font-bold mb-2">Artists who can't stand waiting for permission</h3>
            </div>
            
            <div className="bg-event-blue/10 p-6 rounded-lg border border-event-neon/20 animate-on-scroll md:col-span-2">
              <h3 className="text-xl font-bold mb-2">Rebels, builders, and sharp minds with a story to tell</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-20 bg-event-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
            What Our <span className="text-event-neon">Members</span> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-event-dark/30 p-6 rounded-lg animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-event-neon/20 flex items-center justify-center text-event-neon text-xl font-bold">
                  JM
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">James Mwangi</h3>
                  <p className="text-sm text-event-light/70">DJ & Producer</p>
                </div>
              </div>
              <p className="text-event-light/90 italic">"I met my entire new creative team here."</p>
            </div>
            
            <div className="bg-event-dark/30 p-6 rounded-lg animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-event-neon/20 flex items-center justify-center text-event-neon text-xl font-bold">
                  SK
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Sarah Kimani</h3>
                  <p className="text-sm text-event-light/70">Fashion Designer</p>
                </div>
              </div>
              <p className="text-event-light/90 italic">"The connections I've made through LiveStyle have transformed my business."</p>
            </div>
            
            <div className="bg-event-dark/30 p-6 rounded-lg animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-event-neon/20 flex items-center justify-center text-event-neon text-xl font-bold">
                  DO
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">David Ochieng</h3>
                  <p className="text-sm text-event-light/70">Entrepreneur</p>
                </div>
              </div>
              <p className="text-event-light/90 italic">"Diani has never felt like this before."</p>
            </div>
          </div>
          
          <div className="text-center mt-8 animate-on-scroll">
            <p className="text-event-light/70 text-lg">
              <span className="font-bold text-event-neon">438</span> members and counting...
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-event-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
            Membership <span className="text-event-neon">Tiers</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-event-blue/10 p-8 rounded-lg border border-event-light/10 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-2">Standard Access</h3>
              <div className="text-3xl font-bold text-event-neon mb-6">KES 2,000<span className="text-event-light/70 text-lg">/year</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>Private event invites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>Member networking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>Digital membership card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>Access to member portal</span>
                </li>
              </ul>
              
              <div ref={formRef} id="form">
                <MembershipFormDialog 
                  trigger={
                    <Button className="w-full bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold">
                      Become a Member
                    </Button>
                  } 
                />
              </div>
            </div>
            
            <div className="bg-event-blue/20 p-8 rounded-lg border border-event-neon/30 animate-on-scroll relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-event-neon text-event-dark text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Inner Circle Plus</h3>
              <div className="text-3xl font-bold text-event-neon mb-6">KES 5,000<span className="text-event-light/70 text-lg">/year</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>All Standard benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>Early bird access to all events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>Exclusive LiveStyle merch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>VIP access at select events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-event-neon mr-2">✓</span>
                  <span>Priority for creative collaborations</span>
                </li>
              </ul>
              
              <MembershipFormDialog 
                trigger={
                  <Button className="w-full bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold">
                    Upgrade to Inner Circle Plus
                  </Button>
                } 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-event-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-palm-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll">
              Join the Circle. Shape the Culture.
            </h2>
            
            <p className="text-xl mb-8 text-event-light/90 animate-on-scroll">
              The LiveStyle Inner Circle is where the next wave of Kenyan culture is being built.
              Don't just witness it — be part of creating it.
            </p>
            
            <MembershipFormDialog 
              trigger={
                <Button 
                  size="lg" 
                  className="bg-event-neon text-event-dark hover:bg-event-neon/80 font-bold px-8 py-6 text-lg animate-on-scroll"
                >
                  Become a Member →
                </Button>
              } 
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Membership;
