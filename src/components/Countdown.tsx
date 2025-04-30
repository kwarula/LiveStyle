
import { useState, useEffect } from "react";

const Countdown = () => {
  // Set the event date (May 2nd, 2025)
  const eventDate = new Date("2025-05-02T15:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance < 0) {
        // Event has started
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [eventDate]);
  
  const CountdownUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-black/40 backdrop-blur-sm px-4 py-3 rounded-lg w-20 text-center">
        <span className="text-3xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-sm mt-1 text-event-light/70">{label}</span>
    </div>
  );

  return (
    <section className="py-12 bg-gradient-to-r from-event-blue/90 to-event-blue">
      <div className="event-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="text-event-neon">COUNTDOWN</span> TO THE EVENT
        </h2>
        
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          <CountdownUnit value={timeLeft.days} label="DAYS" />
          <span className="text-3xl font-bold">:</span>
          <CountdownUnit value={timeLeft.hours} label="HOURS" />
          <span className="text-3xl font-bold">:</span>
          <CountdownUnit value={timeLeft.minutes} label="MINS" />
          <span className="text-3xl font-bold">:</span>
          <CountdownUnit value={timeLeft.seconds} label="SECS" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
