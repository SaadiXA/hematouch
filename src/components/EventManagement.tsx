import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import eventBanner from "@/assets/event-banner.png";
import successPartners from "@/assets/success-partners.png";
import exhibition1 from "@/assets/exhibition-1.png";
import exhibition2 from "@/assets/exhibition-2.png";
import exhibition3 from "@/assets/exhibition-3.png";
import exhibition4 from "@/assets/exhibition-4.png";
import exhibition5 from "@/assets/exhibition-5.png";

const EventManagement = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const images = [eventBanner, successPartners, exhibition1, exhibition2, exhibition3, exhibition4, exhibition5];

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.clientWidth;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="event-management" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="w-full max-w-[2000px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground animate-fade-in">
            نماذج <span className="text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">أعمالنا وشركاء النجاح</span>
          </h2>
        </div>

        {/* Premium Carousel */}
        <div className="relative w-full px-4 md:px-8 lg:px-12">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            onTouchStart={handleUserInteraction}
            onMouseDown={handleUserInteraction}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
            }}
          >
            <div className="flex gap-0">
              {images.map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full px-2 md:px-4"
                  style={{
                    scrollSnapAlign: 'center',
                  }}
                >
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 group">
                    <img 
                      src={img} 
                      alt={`عرض ${index + 1}`}
                      className="w-full h-auto object-contain transition-all duration-1000 group-hover:scale-105 group-hover:brightness-105 max-h-[60vh]"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <button
            onClick={() => { prevSlide(); handleUserInteraction(); }}
            className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 items-center justify-center rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-intense)] transition-all duration-300 hover:scale-110 z-10 backdrop-blur-md"
            aria-label="السابق"
          >
            <ChevronRight className="w-7 h-7 lg:w-8 lg:h-8" />
          </button>
          <button
            onClick={() => { nextSlide(); handleUserInteraction(); }}
            className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 items-center justify-center rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-intense)] transition-all duration-300 hover:scale-110 z-10 backdrop-blur-md"
            aria-label="التالي"
          >
            <ChevronLeft className="w-7 h-7 lg:w-8 lg:h-8" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => { scrollToIndex(index); handleUserInteraction(); }}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex 
                    ? 'w-12 md:w-16 h-3 md:h-4 bg-primary shadow-[var(--shadow-glow)]' 
                    : 'w-3 md:w-4 h-3 md:h-4 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`الانتقال إلى الشريحة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventManagement;
