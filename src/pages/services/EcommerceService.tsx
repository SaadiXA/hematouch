import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ecommerceIcon from "@/assets/services/ecommerce-icon.png";
import ecommerceBanner from "@/assets/services/ecommerce-banner.jpg";

const EcommerceService = () => {
  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إنشاء المتاجر الإلكترونية";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ecommerceBanner} 
            alt="إنشاء المتاجر الإلكترونية" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={ecommerceIcon} alt="Ecommerce Icon" className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              إنشاء المتاجر الإلكترونية
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              تصميم وتطوير موقع إلكتروني احترافي
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
                هل تبحث عن موقع إلكتروني احترافي يعكس هوية علامتك التجارية؟ في هيما تاتش، نقدم لك حلولاً متكاملة لإنشاء موقع إلكتروني مميز يساعدك على تعزيز تواجدك الرقمي، جذب العملاء، وتحقيق أهدافك التجارية. نعتمد على أحدث التقنيات في تصميم وتطوير المواقع، مع تحسين الأداء، توافق المواقع مع جميع الأجهزة، وتجربة مستخدم سلسة لضمان أفضل النتائج.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">ماذا نقدم؟</h2>
              <p className="text-lg text-foreground mb-6">
                في هيما تاتش، نقدم خدمات متكاملة لإنشاء المواقع الإلكترونية، مما يساعدك على تحقيق حضور قوي، تجربة مستخدم مميزة، ونمو مستدام. إليك ما نقدمه لك:
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>تحليل احتياجات الموقع:</strong> نقوم بدراسة نشاطك التجاري والجمهور المستهدف لوضع خطة متكاملة لإنشاء موقع يلبي احتياجاتك ويساعدك في تحقيق أهدافك.
                </li>
                <li className="text-lg">
                  <strong>تصميم الموقع (UI/UX):</strong> نُصمم واجهات احترافية وجذابة، مع تجربة مستخدم سلسة تضمن سهولة التصفح وتعزز هوية علامتك التجارية.
                </li>
                <li className="text-lg">
                  <strong>تطوير الموقع وبرمجته:</strong> نستخدم أحدث التقنيات لتطوير موقع سريع، متجاوب، وآمن، مع ضمان توافقه مع جميع الأجهزة والمتصفحات.
                </li>
                <li className="text-lg">
                  <strong>تحليل الأداء والتقارير الدورية:</strong> نوفر تقارير تفصيلية عن أداء الموقع، عدد الزوار، معدل التحويل، ونقاط التحسين لضمان أفضل النتائج لمشروعك الرقمي.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">رحلتك معنا</h2>
              <p className="text-lg text-foreground mb-6">
                في هيما، نضمن لك تجربة سلسة واحترافية في إنشاء موقع إلكتروني. إليك خطوات بدء التعاون معنا:
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>احجز استشارة:</strong> نبدأ بمكالمة استشارية لفهم نشاطك التجاري، أهدافك، والجمهور المستهدف.
                </li>
                <li className="text-lg">
                  <strong>تحليل الوضع الحالي:</strong> نُجري تحليلًا دقيقًا لمتطلباتك ونحدد أفضل الحلول التقنية والتصميمية.
                </li>
                <li className="text-lg">
                  <strong>وضع الاستراتيجية:</strong> نُنشئ خطة تصميم وتطوير مخصصة تشمل تجربة المستخدم، واجهة المستخدم، ووظائف الموقع.
                </li>
                <li className="text-lg">
                  <strong>البدء في التنفيذ والمتابعة:</strong> نبدأ في تصميم الموقع، برمجته، واختباره لضمان تجربة مثالية، مع تقديم الدعم الفني المستمر.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">أسئلة شائعة</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ما الذي تشملُه خدمة إنشاء المواقع الإلكترونية؟</h3>
                  <p className="text-lg text-muted-foreground">تتضمن الخدمة تصميم وبرمجة الموقع، تحسين تجربة المستخدم، توافقه مع الأجهزة المختلفة، وتحسين محركات البحث.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل يمكنكم إنشاء مواقع متعددة الصفحات أم مواقع بسيطة فقط؟</h3>
                  <p className="text-lg text-muted-foreground">نعم، يمكننا تطوير جميع أنواع المواقع، من الصفحات التعريفية إلى المتاجر الإلكترونية والمنصات المتقدمة.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل يمكنكم دمج الموقع مع أنظمة أخرى؟</h3>
                  <p className="text-lg text-muted-foreground">بالطبع! يمكننا دمجه مع أنظمة الدفع، CRM، وأي منصات أخرى تحتاجها.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  ابدأ متجرك الآن
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

export default EcommerceService;
