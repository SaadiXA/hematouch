import { useEffect, useRef } from "react";
import eventBanner from "@/assets/event-banner.png";
import successPartners from "@/assets/success-partners.png";
import exhibition1 from "@/assets/exhibition-1.png";
import exhibition2 from "@/assets/exhibition-2.png";
import exhibition3 from "@/assets/exhibition-3.png";
import exhibition4 from "@/assets/exhibition-4.png";
import exhibition5 from "@/assets/exhibition-5.png";

const EventManagement = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;
      }
    }, scrollInterval);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section id="event-management" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Banner */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-intense)] transition-all duration-300">
          <img 
            src={eventBanner} 
            alt="معارض إدارة الفعاليات والسمعة" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            معارض <span className="text-primary">إدارة الفعاليات والسمعة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحقق لك حضوراً استثنائياً في المعارض والفعاليات من خلال تصاميم مبتكرة وإدارة احترافية
          </p>
        </div>

        {/* Success Partners */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-intense)] transition-all duration-300">
          <img 
            src={successPartners} 
            alt="شركاء النجاح" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Horizontal Scrolling Exhibition Gallery */}
        <div className="relative">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              نماذج <span className="text-primary">أعمالنا</span>
            </h3>
            <p className="text-muted-foreground">EXHIBITION STANDS ( <span className="text-primary">COMMANDOS EVENT</span> )</p>
          </div>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-6 min-w-max px-4">
              {[exhibition1, exhibition2, exhibition3, exhibition4, exhibition5].map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[90vw] md:w-[600px] lg:w-[700px] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-intense)] transition-all duration-300 hover:-translate-y-2"
                >
                  <img 
                    src={img} 
                    alt={`معرض ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            هل تريد حضوراً مميزاً في معرضك القادم؟
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            نوفر لك تصاميم جناح متكاملة وإدارة احترافية لفعالياتك
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="inline-block bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-bold rounded-full px-10 py-4 shadow-[var(--shadow-glow)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default EventManagement;
