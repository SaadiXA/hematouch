import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import advertisingIcon from "@/assets/services/advertising-icon.png";
import advertisingBanner from "@/assets/services/advertising-banner.jpg";

const AdvertisingService = () => {
  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إدارة الحملات الإعلانية";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={advertisingBanner} 
            alt="إدارة الحملات الإعلانية" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={advertisingIcon} alt="Advertising Icon" className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              إدارة الحملات الإعلانية
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              إدارة احترافية لحملاتك الإعلانية
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
                هل تبحث عن حملة إعلانية احترافية تحقق أهدافك التسويقية؟ في هيما تاتش، نقدم لك حلولًا متكاملة لإدارة الحملات الإعلانية، مما يساعدك على زيادة الوعي بعلامتك التجارية، جذب العملاء المحتملين، وتحقيق أعلى عائد على الاستثمار. نعتمد على استراتيجيات تسويقية مدروسة لكل نشاط تجاري، مع تصميم إعلانات جذابة، استهداف دقيق للجمهور، إدارة الميزانية بكفاءة، وتحليل الأداء المستمر لضمان تحقيق أفضل النتائج.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">ماذا نقدم؟</h2>
              <p className="text-lg text-foreground mb-6">
                في هيما تاتش، نقدم خدمات متكاملة لإدارة الحملات الإعلانية، مما يساعدك على تحقيق وصول أوسع، استهداف دقيق، وعائد استثماري أعلى. إليك ما نقدمه لك:
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>إعداد الاستراتيجية الإعلانية:</strong> نقوم بتحليل نشاطك التجاري والجمهور المستهدف لإنشاء خطة إعلانية مخصصة تضمن تحقيق أعلى العوائد.
                </li>
                <li className="text-lg">
                  <strong>تصميم الإعلانات (صور + فيديو + كتابة):</strong> ننتج محتوى إبداعيًا جذابًا، يشمل التصميمات الاحترافية والكتابة التسويقية المؤثرة التي تعكس هوية علامتك التجارية.
                </li>
                <li className="text-lg">
                  <strong>إدارة الميزانية وتحسين الأداء:</strong> نُدير ميزانيتك الإعلانية بكفاءة عالية لضمان أفضل عائد على الاستثمار، مع متابعة مستمرة لتحقيق أقصى استفادة.
                </li>
                <li className="text-lg">
                  <strong>تحليل الأداء والتقارير الدورية:</strong> نوفر لك تقارير تفصيلية عن أداء حملاتك الإعلانية، بما في ذلك نسبة التفاعل، معدلات التحويل، ونمو المبيعات.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">أسئلة شائعة</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ما الذي تشمله خدمة إدارة الحملات الإعلانية؟</h3>
                  <p className="text-lg text-muted-foreground">تشمل الخدمة إعداد الاستراتيجية، استهداف الجمهور بدقة، تصميم الإعلانات، إدارة الميزانية، تشغيل الحملات على مختلف المنصات، ومتابعة الأداء لتحسين النتائج.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل يمكنكم تشغيل الحملات على أكثر من منصة؟</h3>
                  <p className="text-lg text-muted-foreground">نعم، ندير حملاتك على منصات متعددة مثل فيسبوك، إنستجرام، جوجل، يوتيوب، تيك توك، وسناب شات.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ما الميزانية المناسبة لبدء حملة ناجحة؟</h3>
                  <p className="text-lg text-muted-foreground">نساعدك على تحديد ميزانية فعالة تضمن أفضل عائد على الاستثمار بناءً على أهدافك والمنصة المستخدمة.</p>
                </div>
              </div>

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

export default AdvertisingService;
