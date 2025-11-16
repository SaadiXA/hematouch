import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import socialIcon from "@/assets/services/social-media-icon.png";
import socialBanner from "@/assets/services/social-media-banner.jpg";

const SocialMediaService = () => {
  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إدارة وسائل التواصل الاجتماعي";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={socialBanner} 
            alt="إدارة وسائل التواصل الاجتماعي" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={socialIcon} alt="Social Media Icon" className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              إدارة وسائل التواصل الاجتماعي
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              إدارة احترافية لحساباتك الاجتماعية
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
                هل تبحث عن إدارة احترافية لحساباتك على مواقع التواصل الاجتماعي؟ في هيما تاتش، نقدم لك حلولاً متكاملة لتعزيز الوعي بعلامتك التجارية، وزيادة التفاعل مع جمهورك، وتحقيق نمو حقيقي لأعمالك. نعتمد على استراتيجيات تسويقية مخصصة، مع إنشاء محتوى جذاب، وجدولة منتظمة، وإدارة التفاعل، وتحليل البيانات.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">ماذا نقدم؟</h2>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>إعداد الاستراتيجية التسويقية:</strong> نحلل نشاطك التجاري والجمهور المستهدف لإنشاء خطة تسويق مخصصة.
                </li>
                <li className="text-lg">
                  <strong>إنشاء المحتوى (تصميم + كتابة):</strong> ننتج محتوى إبداعيًا جذابًا، يشمل التصميمات الاحترافية والكتابة التسويقية المؤثرة.
                </li>
                <li className="text-lg">
                  <strong>جدولة المنشورات ونشرها:</strong> نُدير مواعيد النشر بدقة لضمان الوصول إلى جمهورك في الأوقات المناسبة.
                </li>
                <li className="text-lg">
                  <strong>إدارة التفاعل والردود:</strong> نتابع التعليقات والرسائل، ونتفاعل مع جمهورك بأسلوب احترافي يعزز الثقة والولاء.
                </li>
                <li className="text-lg">
                  <strong>الإعلانات الممولة وتحليل الأداء:</strong> نُطلق حملات إعلانية مستهدفة لزيادة الوصول والمبيعات، مع تحليل النتائج لتحسين الأداء.
                </li>
              </ul>

              <div className="mt-12 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  ابدأ الآن
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

export default SocialMediaService;
