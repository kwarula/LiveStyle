
import { Card, CardContent } from "@/components/ui/card";

const Venue = () => {
  return (
    <section id="venue" className="section-padding bg-event-blue relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-event-neon blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-event-neon blur-3xl"></div>
      </div>
      
      <div className="event-container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-event-neon">THE</span> VENUE
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-lg border border-white/10">
              <img 
                src="/lovable-uploads/fa1d7643-cb07-4278-aca0-632763394004.png" 
                alt="Soul Breeze Beach Resort" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-white/10">
                <img 
                  src="/lovable-uploads/0044a5ad-0cdf-4c03-94ba-dbbdcf1709df.png" 
                  alt="Resort Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-white/10">
                <img 
                  src="/lovable-uploads/3ce0f381-27ae-4e72-a426-c58f646df764.png" 
                  alt="Beach Lounge Area" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Soul Breeze Beach Resort</h3>
            <p className="mb-4 text-event-light/90">
              Nestled on the pristine white sands of Diani Beach, Soul Breeze Beach Resort offers the perfect tropical backdrop for Pre-Game Friday. With stunning Indian Ocean views and refreshing sea breezes, it's the ideal location to start your weekend in style.
            </p>
            <p className="mb-6 text-event-light/90">
              Soul Culture Hub, located within the resort, provides a vibrant atmosphere with top-tier sound systems, comfortable seating, and a dedicated dance area just steps from the ocean.
            </p>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-event-neon">Venue Amenities</h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-event-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Beachfront Access
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-event-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Full-service Bar
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-event-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Premium Sound System
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-event-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    VIP Lounge Areas
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-event-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Restaurant On-site
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-event-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Secure Parking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-event-accent/10 border border-event-accent/20 rounded-lg">
              <h4 className="font-bold text-event-accent mb-2">About Soul Culture Hub</h4>
              <p className="text-sm text-event-light/80">
                Soul Culture Hub is a vibrant beachside lounge known for its colorful African decor, relaxed atmosphere, and incredible ocean views. The perfect setting for Pre-Game Friday with comfortable seating areas, great music, and unforgettable sunsets.
              </p>
            </div>
            {/* Map removed from here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
