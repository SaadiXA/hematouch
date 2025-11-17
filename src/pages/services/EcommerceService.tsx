import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ecommerceIcon from "@/assets/services/ecommerce-icon.png";
import ecommerceBanner from "@/assets/services/ecommerce-banner.jpg";

const EcommerceService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إنشاء المتاجر الإلكترونية";
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
              إنشاء المتاجر الإلكترونية
            </Badge>
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-3xl bg-white shadow-2xl mb-12 hover:scale-105 transition-transform duration-300">
              <img src={ecommerceIcon} alt="إنشاء المتاجر الإلكترونية" className="w-28 h-28 object-contain" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src={ecommerceBanner}
              alt="إنشاء المتاجر الإلكترونية" 
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
                هل تبحث عن موقع إلكتروني احترافي يعكس هوية علامتك التجارية؟ في هيما تاتش، نقدم لك حلولاً متكاملة لإنشاء موقع إلكتروني مميز يساعدك على تعزيز تواجدك الرقمي، جذب العملاء، وتحقيق أهدافك التجارية. نعتمد على أحدث التقنيات في تصميم وتطوير المواقع، مع تحسين الأداء، توافق المواقع مع جميع الأجهزة، وتجربة مستخدم سلسة لضمان أفضل النتائج.
              </p>
            </div>

            {/* Services Card */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">ماذا نقدم؟</h2>
              <p className="text-lg md:text-xl text-foreground mb-8 text-center">
                في هيما تاتش، نقدم خدمات متكاملة لإنشاء المواقع الإلكترونية، مما يساعدك على تحقيق حضور قوي، تجربة مستخدم مميزة، ونمو مستدام. إليك ما نقدمه لك:
              </p>
              <div className="grid gap-6">
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تحليل احتياجات الموقع:</strong> نقوم بدراسة نشاطك التجاري والجمهور المستهدف لوضع خطة متكاملة لإنشاء موقع يلبي احتياجاتك ويساعدك في تحقيق أهدافك.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تصميم الموقع (UI/UX):</strong> نُصمم واجهات احترافية وجذابة، مع تجربة مستخدم سلسة تضمن سهولة التصفح وتعزز هوية علامتك التجارية.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تطوير الموقع وبرمجته:</strong> نستخدم أحدث التقنيات لتطوير موقع سريع، متجاوب، وآمن، مع ضمان توافقه مع جميع الأجهزة والمتصفحات.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تحسين محركات البحث (SEO):</strong> نُطبق استراتيجيات SEO المتقدمة لضمان ظهور موقعك في نتائج البحث الأولى وزيادة عدد الزوار.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">الصيانة والدعم الفني المستمر:</strong> نوفر لك خدمات صيانة ودعم فني لضمان عمل موقعك بكفاءة عالية طوال الوقت.
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
              ابدأ متجرك الإلكتروني الآن
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
              دعنا نساعدك في إنشاء متجر إلكتروني احترافي يحقق أهدافك التجارية
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

export default EcommerceService;
