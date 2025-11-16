import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import motionIcon from "@/assets/services/motion-graphics-icon.png";
import motionBanner from "@/assets/services/motion-graphics-banner.jpg";

const MotionGraphicsService = () => {
  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إنتاج فيديو الموشن جرافيك";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={motionBanner} 
            alt="إنتاج فيديو الموشن جرافيك" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={motionIcon} alt="Motion Graphics Icon" className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              إنتاج فيديو الموشن جرافيك
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              فيديوهات إبداعية تخطف الأنظار
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
                هل تبحث عن موشن جرافيك احترافي يعزز علامتك التجارية؟ في هيما تاتش، نقدم لك حلولًا إبداعية لإنتاج فيديوهات موشن جرافيك تجذب الانتباه، توضح أفكارك، وتساعد في إيصال رسالتك بفعالية. نعتمد على استراتيجيات بصرية مخصصة، مع تصاميم احترافية، سيناريوهات إبداعية، ورسوم متحركة جذابة.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">ماذا نقدم؟</h2>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>إعداد الاستراتيجية الإبداعية:</strong> نقوم بتحليل نشاطك التجاري والجمهور المستهدف لإنشاء سيناريوهات موشن جرافيك مبتكرة.
                </li>
                <li className="text-lg">
                  <strong>تصميم المشاهد والرسومات:</strong> نُنتج تصاميم احترافية وعناصر بصرية جذابة تعكس هوية علامتك التجارية وتُبهر جمهورك.
                </li>
                <li className="text-lg">
                  <strong>إعلانات الفيديو وتحليل الأداء:</strong> نُنشئ فيديوهات إعلانية موجهة تزيد من وصول علامتك التجارية، مع متابعة الأداء وتحسينه.
                </li>
                <li className="text-lg">
                  <strong>تقديم الفيديوهات بجودة عالية:</strong> نوفر لك فيديوهات بجودة احترافية متوافقة مع جميع المنصات لضمان أفضل تجربة مشاهدة.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">أسئلة شائعة</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ما الذي تشمله خدمة إنتاج الموشن جرافيك؟</h3>
                  <p className="text-lg text-muted-foreground">تشمل كتابة السيناريو، تصميم المشاهد، تحريك العناصر، إضافة المؤثرات البصرية والصوتية، والتعليق الصوتي.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل يمكنكم إنشاء فيديوهات لمجالات مختلفة؟</h3>
                  <p className="text-lg text-muted-foreground">نعم، نُنتج فيديوهات لمختلف المجالات، بما في ذلك التسويق، التعليم، العقارات، والخدمات.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل توفرون تعليقًا صوتيًا احترافيًا؟</h3>
                  <p className="text-lg text-muted-foreground">نعم، نوفر تعليقًا صوتيًا احترافيًا بصوت رجالي أو نسائي، وبلهجات متنوعة.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  ابدأ مشروعك الآن
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

export default MotionGraphicsService;
