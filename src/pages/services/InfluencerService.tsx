import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import influencerIcon from "@/assets/services/influencer-icon.png";
import influencerBanner from "@/assets/services/influencer-banner.jpg";

const InfluencerService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة حملات التسويق عبر المؤثرين";
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
              حملات التسويق عبر المؤثرين
            </Badge>
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-3xl bg-white shadow-2xl mb-12 hover:scale-105 transition-transform duration-300">
              <img src={influencerIcon} alt="حملات التسويق عبر المؤثرين" className="w-28 h-28 object-contain" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src={influencerBanner}
              alt="حملات التسويق عبر المؤثرين" 
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
                ابدأوا بالإعلان على سناب شات وحققوا الوصول إلى 90% من الناس بين 13-34 سنة الذين يستخدمون التطبيق للتواصل مع العائلة والأصدقاء. تواصلوا مع جمهور متميز بتفاعل عالٍ يفتح التطبيق أكثر من 30 مرة باليوم.
              </p>
            </div>

            {/* Why Snapchat Card */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">لماذا الإعلان على سناب شات؟</h2>
              <div className="grid gap-6">
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">اجذبوا تفاعلاً حقيقياً أقوى:</strong> الناس أكثر سعادة وتقبّلاً للإعلانات على سناب شات لأنهم يشعرون بالحرية في التعبير عن أنفسهم.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">الوصول إلى جيل الألفية وما بعده:</strong> أكثر من 90% من الشباب بين 13 و34 سنة يتواصلون مع الأصدقاء والمؤثرين والشركات.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تواجدوا حيث يتواجد التسوق الاجتماعي:</strong> يعتبر سناب شات المنصة الأولى لمشاركة المشتريات ولحظات التسوق، بقدرة شرائية تصل إلى تريليونات الدولارات عالمياً.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">إعلانكم جاهز خلال دقائق:</strong> ما عليكم سوى التواصل معنا واختيار طريقة الإعلان التي تريدونها (صورة أو فيديو) أو إنشاء إعلانٍ حي مع المؤثرين الموثقين.
                  </p>
                </div>
              </div>
            </div>

            {/* Budget Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">حقّقوا أكبر استفادة من ميزانيتكم</h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                نحن في HEMA Touch نساعدكم في اختيار أفضل المؤثرين على سناب شات بناءً على أهدافكم التسويقية وميزانيتكم. بإمكانكم البدء بتكاليف منخفضة وتحقيق نتائج ملموسة — سواءً كنتم تسعون لزيادة الوعي بالعلامة التجارية، الوصول لجمهور أوسع، أو تحقيق مبيعات مباشرة.
              </p>
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
              ابدأ حملتك الآن
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
              دعنا نساعدك في الوصول إلى جمهورك المستهدف عبر المؤثرين
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

export default InfluencerService;
