import { useEffect, useRef, useState } from "react";
import eventBanner from "@/assets/event-banner.png";
import successPartners from "@/assets/success-partners.png";
import exhibition1 from "@/assets/exhibition-1.png";
import exhibition2 from "@/assets/exhibition-2.png";
import exhibition3 from "@/assets/exhibition-3.png";
import exhibition4 from "@/assets/exhibition-4.png";
import exhibition5 from "@/assets/exhibition-5.png";

const EventManagement = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (!isUserScrolling && scrollContainer) {
        scrollAmount += 0.5;
        
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
        
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    const handleScroll = () => {
      setIsUserScrolling(true);
      scrollAmount = scrollContainer.scrollLeft;
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsUserScrolling(false);
      }, 2000);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    scrollContainer.addEventListener('touchstart', () => setIsUserScrolling(true), { passive: true });
    scrollContainer.addEventListener('mousedown', () => setIsUserScrolling(true));

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchstart', () => setIsUserScrolling(true));
      scrollContainer.removeEventListener('mousedown', () => setIsUserScrolling(true));
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isUserScrolling]);

  return (
    <section id="event-management" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            نماذج <span className="text-primary">أعمالنا وشركاء النجاح</span>
          </h2>
        </div>

        {/* Horizontal Scrolling Exhibition Gallery */}
        <div className="relative -mx-4">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex gap-6 px-4 py-4">
              {[eventBanner, successPartners, exhibition1, exhibition2, exhibition3, exhibition4, exhibition5].map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-intense)] transition-all duration-500 hover:scale-105 animate-fade-in group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <img 
                    src={img} 
                    alt={`معرض ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default EventManagement;
