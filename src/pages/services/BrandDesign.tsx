import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import brandIcon from "@/assets/services/brand-design-icon.png";
import brandBanner from "@/assets/services/brand-design-banner.jpg";
import { Sparkles, Target, Palette, TrendingUp } from "lucide-react";

const BrandDesign = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة تصميم العلامة التجارية";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="secondary" className="mb-8 text-xl px-8 py-3 font-bold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300">
              تصميم العلامة التجارية
            </Badge>
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] mb-12 hover:scale-105 transition-transform duration-300">
              <img src={brandIcon} alt="تصميم العلامة التجارية" className="w-28 h-28 object-contain" />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border-2 border-border/50 animate-scale-in">
            <img 
              src={brandBanner}
              alt="تصميم العلامة التجارية" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-12 border-2 border-primary/10 shadow-lg">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                هل تبحث عن هوية بصرية احترافية تعكس علامتك التجارية؟ في هيما تاتش، نقدم لك حلولًا متكاملة لتصميم هوية بصرية مميزة تعزز وجودك في السوق وتترك انطباعًا قويًا لدى جمهورك. نعتمد على استراتيجيات تصميم إبداعية لكل نشاط تجاري، مع إنشاء شعار احترافي، اختيار الألوان والخطوط المناسبة، وتطوير دليل هوية لضمان تناسق علامتك التجارية.
              </p>
            </div>

            {/* What We Offer Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">ماذا نقدم؟</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group bg-card/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">إعداد الهوية البصرية</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    ندرس نشاطك التجاري والجمهور المستهدف لإنشاء هوية بصرية مميزة تعكس رؤيتك وأهدافك.
                  </p>
                </div>

                <div className="group bg-card/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Palette className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">تصميم العناصر البصرية</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نبتكر تصاميم احترافية تشمل الشعار، الألوان، الخطوط، والأنماط البصرية، مما يمنح علامتك شخصية متناسقة وجذابة.
                  </p>
                </div>

                <div className="group bg-card/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">تطوير الهوية البصرية الرقمية</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نُطلق حملات إعلانية مستهدفة لزيادة الوصول والمبيعات، مع تحليل النتائج لتحسين الأداء باستمرار.
                  </p>
                </div>

                <div className="group bg-card/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">تحليل الأداء والتطوير</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نوفر لك استشارات وتحديثات دورية لتحسين وتطوير الهوية البصرية وفقًا لاتجاهات السوق.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl p-8 md:p-12 border-2 border-primary/10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">أسئلة شائعة</h2>
              <div className="space-y-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                  <h3 className="text-xl font-bold text-foreground mb-3">ما الذي تشمله خدمة تصميم الهوية البصرية؟</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">تشمل إنشاء شعار احترافي، اختيار ألوان وخطوط، تصميم نمط بصري موحد، وإعداد دليل استخدام الهوية والمواد التسويقية.</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                  <h3 className="text-xl font-bold text-foreground mb-3">هل يمكنكم تصميم هوية متكاملة؟</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">نعم، نقدم تصميم هوية بصرية متكاملة تشمل جميع العناصر البصرية لضمان تناسق وتميز علامتك التجارية.</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                  <h3 className="text-xl font-bold text-foreground mb-3">هل تقدمون دليل استخدام الهوية البصرية؟</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">نعم، نقدم دليل استخدام الهوية (Brand Guidelines) الذي يتضمن تفاصيل عن الاستخدام الصحيح لجميع عناصر الهوية.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">جاهز لبناء هويتك التجارية؟</h3>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-[var(--shadow-glow)]"
                >
                  <span>ابدأ مشروعك الآن</span>
                  <Sparkles className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BrandDesign;
