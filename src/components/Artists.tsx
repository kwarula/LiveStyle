
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Artists = () => {
  const artists = [{
    name: "DJ Kimtai",
    image: "/lovable-uploads/ad1c4f31-b745-4f2e-996c-ee07b089ca9e.png", // Unchanged image
    description: "Spinning the hottest tracks in Hip Hop, Trap, Afro, Dance, and Pop.", // Updated description
    genre: "HIP HOP, Trap, Afro / Dance / Pop" // Correct genre
  }, {
    name: "DJ Ricky",
    image: "/lovable-uploads/b3276a4c-c5ee-4a67-8a36-63dba2b2c271.png", // Swapped image (was S.O.S)
    description: "Bringing the energy with Amapiano, Dancehall, and Afrobeats vibes.", // Updated description
    genre: "Amapiano / Dancehall / Afrobeats" // Correct genre
  }, {
    name: "S.O.S",
    image: "/lovable-uploads/8fcc8d6a-e0fd-4aed-9e68-431d8c9efe00.png", // Swapped image (was DJ Ricky)
    description: "Your Host/MC for the night, keeping the energy high. Also an accomplished rapper.", // Updated description
    // Genre remains removed
  }];
  
  return <section id="artists" className="section-padding bg-gradient-to-b from-event-dark to-event-blue">
      <div className="event-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-event-neon">FEATURED</span> ARTISTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-white"></div>
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover relative z-10" />
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center z-20">
                  <p className="text-event-neon text-lg font-bold p-4">{artist.name}</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-event-neon">{artist.name}</h3>
              <p className="mb-3 text-event-light/90">{artist.description}</p>
              {/* Conditionally render genre only if it exists */}
              {artist.genre && (
                <div className="bg-event-blue/30 rounded-lg p-2">
                  <p className="text-event-light font-medium">{artist.genre}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Artists;
