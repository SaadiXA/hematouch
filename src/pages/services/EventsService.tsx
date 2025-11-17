import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import eventsIcon from "@/assets/services/events-icon.png";
import eventsBanner from "@/assets/services/events-banner.jpg";

const EventsService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إدارة الفعاليات والسمعة";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-8 text-xl px-8 py-3 animate-fade-in shadow-lg">
              إدارة الفعاليات والسمعة
            </Badge>
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-3xl bg-white shadow-2xl mb-12 hover:scale-105 transition-transform duration-300">
              <img src={eventsIcon} alt="إدارة الفعاليات والسمعة" className="w-28 h-28 object-contain" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src={eventsBanner}
              alt="إدارة الفعاليات والسمعة" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section with Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8 shadow-lg">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                في HEMA Touch، نجمع بين الإبداع والتنفيذ المحترف لبناء تجربة متكاملة — من الفكرة إلى اللحظة الختامية — بحيث يظل الحدث في الذاكرة.
              </p>
            </div>

            {/* Services Card */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">ماذا نقدّم؟</h2>
              <div className="grid gap-6">
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">إعداد وتنظيم الحدث:</strong> نبدأ بتحليل أهدافك وجمهورك، ونضع خطة كاملة تشمل الفكرة الإبداعية والتصميم البصري وتجربة الحضور.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">إدارة التنفيذ في الموقع:</strong> نُشرف على كل تفاصيل اليوم — من تجهيز المكان والصوت والإضاءة، إلى تنسيق الفرق والضيوف، لضمان سير الحفل بسلاسة واحتراف.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تصميم هوية بصرية مخصصة للفعالية:</strong> نُبتكر شعاراً مؤقتاً، دعوات، ديكورات، مواد ترويجية تحمل بصمة علامتك وتتماشى مع هويتك.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">الترويج والتغطية الإعلامية:</strong> نُشغّل الحملات الرقمية قبل وأثناء وبعد، مع تغطية فوتوغرافية وفيديو احترافية — لإبراز الحدث والدفع بنتائجك.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تحليل النتائج والتقارير:</strong> بعد انتهاء الفعالية، نقدّم تقريراً مفصّلاً عن الحضور، التفاعل، والأثر التسويقي — لتتطلع بخبرة قيّمة من كل تجربة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              ابدأ فعاليتك الآن
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
              دعنا نساعدك في تنظيم حدث لا يُنسى يعكس احترافية علامتك التجارية
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-background text-primary hover:bg-background/90 font-bold py-5 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EventsService;
