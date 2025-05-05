
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Artists = () => {
  const artists = [{
    name: "Dogo la Diani",
    image: "/lovable-uploads/dogo.png",
    description: "Award-winning Independent Professional recording and performing artist based in Diani, Kenya",
    // No genre specified
  }, {
    name: "DJ Bever",
    image: "/lovable-uploads/bever.png",
    description: "Bringing dancehall and reggae vibes",
    genre: "Dancehall / Reggae"
  }, {
    name: "DJ Ricky",
    image: "/lovable-uploads/b3276a4c-c5ee-4a67-8a36-63dba2b2c271.png", // Image path confirmed correct
    description: "Bringing the energy with Amapiano, Dancehall, and Afrobeats vibes.",
    genre: "Amapiano / Dancehall / Afrobeats"
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
