import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import brandIcon from "@/assets/services/brand-design-icon.png";
import brandBanner from "@/assets/services/brand-design-banner.jpg";

const BrandDesign = () => {
  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة تصميم العلامة التجارية";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={brandBanner} 
            alt="تصميم العلامة التجارية" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={brandIcon} alt="Brand Design Icon" className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              تصميم العلامة التجارية
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              هوية بصرية احترافية تعكس علامتك
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
                هل تبحث عن هوية بصرية احترافية تعكس علامتك التجارية؟ في هيما تاتش، نقدم لك حلولًا متكاملة لتصميم هوية بصرية مميزة تعزز وجودك في السوق وتترك انطباعًا قويًا لدى جمهورك. نعتمد على استراتيجيات تصميم إبداعية لكل نشاط تجاري، مع إنشاء شعار احترافي، اختيار الألوان والخطوط المناسبة، وتطوير دليل هوية لضمان تناسق علامتك التجارية.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">ماذا نقدم؟</h2>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>إعداد الهوية البصرية:</strong> ندرس نشاطك التجاري والجمهور المستهدف لإنشاء هوية بصرية مميزة تعكس رؤيتك وأهدافك.
                </li>
                <li className="text-lg">
                  <strong>تصميم العناصر البصرية:</strong> نبتكر تصاميم احترافية تشمل الشعار، الألوان، الخطوط، والأنماط البصرية، مما يمنح علامتك شخصية متناسقة وجذابة.
                </li>
                <li className="text-lg">
                  <strong>تطوير الهوية البصرية الرقمية:</strong> نُطلق حملات إعلانية مستهدفة لزيادة الوصول والمبيعات، مع تحليل النتائج لتحسين الأداء باستمرار.
                </li>
                <li className="text-lg">
                  <strong>تحليل الأداء والتطوير:</strong> نوفر لك استشارات وتحديثات دورية لتحسين وتطوير الهوية البصرية وفقًا لاتجاهات السوق.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">أسئلة شائعة</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ما الذي تشمله خدمة تصميم الهوية البصرية؟</h3>
                  <p className="text-lg text-muted-foreground">تشمل إنشاء شعار احترافي، اختيار ألوان وخطوط، تصميم نمط بصري موحد، وإعداد دليل استخدام الهوية والمواد التسويقية.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل يمكنكم تصميم هوية متكاملة؟</h3>
                  <p className="text-lg text-muted-foreground">نعم، نقدم تصميم هوية بصرية متكاملة تشمل جميع العناصر البصرية لضمان تناسق وتميز علامتك التجارية.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل تقدمون دليل استخدام الهوية البصرية؟</h3>
                  <p className="text-lg text-muted-foreground">نعم، نقدم دليل استخدام الهوية (Brand Guidelines) الذي يتضمن تفاصيل عن الاستخدام الصحيح لجميع عناصر الهوية.</p>
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

export default BrandDesign;
