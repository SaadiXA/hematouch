import { useEffect, useRef, useState } from "react";
import successPartnersFull from "@/assets/success-partners-full.png";
import exhibitionStand1 from "@/assets/exhibition-stand-1.png";
import exhibitionStand2 from "@/assets/exhibition-stand-2.png";
import exhibitionStand3 from "@/assets/exhibition-stand-3.png";
import exhibitionStand4 from "@/assets/exhibition-stand-4.png";
import exhibitionStand5 from "@/assets/exhibition-stand-5.png";

const EventManagement = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const slides = [
    { img: successPartnersFullImg, alt: "Success Partners Banner" },
    { img: exhibitionStand1, alt: "Exhibition Stand 1" },
    { img: exhibitionStand2, alt: "Exhibition Stand 2" },
    { img: exhibitionStand3, alt: "Exhibition Stand 3" },
    { img: exhibitionStand4, alt: "Exhibition Stand 4" },
    { img: exhibitionStand5, alt: "Exhibition Stand 5" },
  ];

  return (
    <section id="event-management" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-4">
            نماذج <span className="text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">أعمالنا وشركاء النجاح</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4">
            Our work samples & Success Partners
          </p>
        </div>

        {/* Premium Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
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
            <div className="flex">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full px-2 md:px-4"
                  style={{
                    scrollSnapAlign: 'center',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-premium)] transition-all duration-500 bg-card border-2 border-border/50 hover:border-primary/50">
                    <img 
                      src={slide.src} 
                      alt={slide.alt}
                      className="w-full h-auto object-contain max-h-[70vh] bg-background"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleUserInteraction();
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-10 md:w-12 h-2.5 md:h-3 bg-primary shadow-[0_0_20px_rgba(255,100,0,0.6)]' 
                    : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventManagement;
