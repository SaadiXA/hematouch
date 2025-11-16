import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import influencerIcon from "@/assets/services/influencer-icon.png";
import influencerBanner from "@/assets/services/influencer-banner.jpg";

const InfluencerService = () => {
  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة حملات التسويق عبر المؤثرين";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={influencerBanner} 
            alt="حملات التسويق عبر المؤثرين" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={influencerIcon} alt="Influencer Marketing Icon" className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              حملات التسويق عبر المؤثرين
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              حملات إعلانية بالتعاقد مع المؤثرين الموثقين
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                ابدأوا بالإعلان على سناب شات وحققوا الوصول إلى 90% من الناس بين 13-34 سنة الذين يستخدمون التطبيق للتواصل مع العائلة والأصدقاء. تواصلوا مع جمهور متميز بتفاعل عالٍ يفتح التطبيق أكثر من 30 مرة باليوم.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">لماذا الإعلان على سناب شات؟</h2>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>اجذبوا تفاعلاً حقيقياً أقوى:</strong> الناس أكثر سعادة وتقبّلاً للإعلانات على سناب شات لأنهم يشعرون بالحرية في التعبير عن أنفسهم.
                </li>
                <li className="text-lg">
                  <strong>الوصول إلى جيل الألفية وما بعده:</strong> أكثر من 90% من الشباب بين 13 و34 سنة يتواصلون مع الأصدقاء والمؤثرين والشركات.
                </li>
                <li className="text-lg">
                  <strong>تواجدوا حيث يتواجد التسوق الاجتماعي:</strong> يعتبر سناب شات المنصة الأولى لمشاركة المشتريات ولحظات التسوق، بقدرة شرائية تصل إلى تريليونات الدولارات عالمياً.
                </li>
                <li className="text-lg">
                  <strong>إعلانكم جاهز خلال دقائق:</strong> ما عليكم سوى التواصل معنا واختيار طريقة الإعلان التي تريدونها (صورة أو فيديو) أو إنشاء إعلانٍ حي مع المؤثرين الموثقين.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">حقّقوا أكبر استفادة من ميزانيتكم</h2>
              <p className="text-lg text-foreground">
                نساعدكم على تحقيق أهدافكم سواء كانت زيادة الوعي بعلامتكم التجارية، جذب الاهتمام بمنتجاتكم، أو تحقيق التحويلات والمبيعات المباشرة.
              </p>

              <div className="mt-12 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  ابدأ حملتك الآن
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

export default InfluencerService;
