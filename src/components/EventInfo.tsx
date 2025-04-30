import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
const EventInfo = () => {
  return <section id="event" className="section-padding bg-event-dark">
      <div className="event-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-event-neon">EVENT</span> DETAILS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-event-blue/20 backdrop-blur-sm p-6 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="text-event-neon mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1">Date</h3>
                  <p className="text-event-light/90">Friday, May 2nd, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-event-neon mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1">Time</h3>
                  <p className="text-event-light/90">3:00 PM - 9:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-event-neon mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1">Location</h3>
                  <p className="text-event-light/90">Soul Culture Hub</p>
                  <p className="text-event-light/90">Soul Breeze Beach Resort, Diani</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Ticket className="text-event-neon mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1">Entry Fee</h3>
                  <p className="text-event-light/90">KES 250</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Experience the Vibe</h3>
            <p className="mb-4 text-event-light/90">
              Welcome to Pre-Game Friday, where the weekend officially begins! This exclusive beach event brings together the best DJs, amazing ocean views, and vibrant energy at the stunning Soul Breeze Beach Resort in Diani.
            </p>
            <p className="mb-6 text-event-light/90">
              Get ready for an unforgettable afternoon of music, dancing, and tropical vibes. Whether you're looking to kick off your weekend right or just enjoy the perfect sunset by the Indian Ocean, Pre-Game Friday is your ultimate destination.
            </p>
            
            <div className="bg-event-neon/10 border border-event-neon/30 p-4 rounded-lg">
              <h4 className="text-event-neon font-bold mb-2">EXCLUSIVE OFFERS</h4>
              <ul className="list-disc list-inside text-event-light/90 space-y-1">
                <li>2-for-1 cocktail specials from 3PM - 5PM</li>
                <li>Complimentary welcome shot for members</li>
                <li>VIP beach lounge seating available</li>
                <li>Special food menu by Soul Breeze Restaurant</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Find Us</h3>
          <div className="rounded-xl overflow-hidden h-[300px] md:h-[400px] border border-white/10 shadow-lg"> {/* Added border and shadow */}
            <iframe src="https://maps.google.com/maps?q=-4.365596720905566,39.55940014605358&hl=en&z=15&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Event Location Map"></iframe> {/* Updated src and title, removed unnecessary style */}
          </div>
        </div>
      </div>
    </section>;
};
export default EventInfo;
