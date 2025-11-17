import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import advertisingIcon from "@/assets/services/advertising-icon.png";
import advertisingBanner from "@/assets/services/advertising-banner.jpg";

const AdvertisingService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إدارة الحملات الإعلانية";
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
              إدارة الحملات الإعلانية
            </Badge>
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-3xl bg-white shadow-2xl mb-12 hover:scale-105 transition-transform duration-300">
              <img src={advertisingIcon} alt="إدارة الحملات الإعلانية" className="w-28 h-28 object-contain" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src={advertisingBanner}
              alt="إدارة الحملات الإعلانية" 
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
                هل تبحث عن حملة إعلانية احترافية تحقق أهدافك التسويقية؟ في هيما تاتش، نقدم لك حلولًا متكاملة لإدارة الحملات الإعلانية، مما يساعدك على زيادة الوعي بعلامتك التجارية، جذب العملاء المحتملين، وتحقيق أعلى عائد على الاستثمار. نعتمد على استراتيجيات تسويقية مدروسة لكل نشاط تجاري، مع تصميم إعلانات جذابة، استهداف دقيق للجمهور، إدارة الميزانية بكفاءة، وتحليل الأداء المستمر لضمان تحقيق أفضل النتائج.
              </p>
            </div>

            {/* Services Card */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">ماذا نقدم؟</h2>
              <p className="text-lg md:text-xl text-foreground mb-8 text-center">
                في هيما تاتش، نقدم خدمات متكاملة لإدارة الحملات الإعلانية، مما يساعدك على تحقيق وصول أوسع، استهداف دقيق، وعائد استثماري أعلى. إليك ما نقدمه لك:
              </p>
              <div className="grid gap-6">
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">إعداد الاستراتيجية الإعلانية:</strong> نقوم بتحليل نشاطك التجاري والجمهور المستهدف لإنشاء خطة إعلانية مخصصة تضمن تحقيق أعلى العوائد.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تصميم الإعلانات (صور + فيديو + كتابة):</strong> ننتج محتوى إبداعيًا جذابًا، يشمل التصميمات الاحترافية والكتابة التسويقية المؤثرة التي تعكس هوية علامتك التجارية.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">استهداف دقيق للجمهور:</strong> نحدد جمهورك المستهدف بدقة بناءً على الموقع، الاهتمامات، السلوك، والعمر لضمان وصول إعلاناتك للشريحة الأنسب.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">إدارة الميزانية بكفاءة:</strong> نُدير ميزانيتك الإعلانية بذكاء لتحقيق أقصى استفادة ممكنة من كل ريال تنفقه على الحملة.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تحليل الأداء وتحسينه:</strong> نتابع أداء حملاتك بشكل دوري، ونُحسّن الإعلانات بناءً على البيانات لضمان تحقيق أفضل النتائج.
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
              ابدأ حملتك الإعلانية الآن
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
              دعنا نساعدك في تحقيق أهدافك التسويقية وزيادة عائدك على الاستثمار
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

export default AdvertisingService;
