import { Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return <footer id="contact" className="bg-event-dark text-event-light pt-16 pb-8">
      <div className="event-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">
              <a href="tel:+254712345678" className="hover:text-event-neon transition-colors">+254 113 241 777</a>
            </p>
            <p className="mb-4">
              <a href="mailto:info@thelifestylediani.com" className="hover:text-event-neon transition-colors">thelivestylediani@gmail.com</a>
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ashafromdiani" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-event-neon hover:text-event-dark p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/ashafromdiani" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-event-neon hover:text-event-dark p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/ashafromdiani" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-event-neon hover:text-event-dark p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Event Info</h3>
            <p className="mb-2">Pre-Game Friday</p>
            <p className="mb-2">May 2nd, 2025</p>
            <p className="mb-2">3:00 PM - 9:00 PM</p>
            <p>Entry: KES 250</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <p className="mb-2">Soul Culture Hub</p>
            <p className="mb-2">Soul Breeze Beach Resort</p>
            <p>Diani Beach, Kenya</p> {/* Reverted margin-bottom */}
            {/* Map removed from here */}
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>© 2025 LiveStyle Diani. All Rights Reserved.</p> {/* Updated Copyright */}
          <p className="mt-2 text-event-light/60">
            Website by <a href="#" className="text-event-neon hover:underline">Lovable</a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
