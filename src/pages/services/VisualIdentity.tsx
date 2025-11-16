import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import brandIcon from "@/assets/services/brand-design-icon.png";
import brandBanner from "@/assets/services/brand-design-banner.jpg";

const VisualIdentity = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              تصميم العلامة التجارية
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <img src={brandIcon} alt="تصميم هوية بصرية" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={brandBanner}
              alt="تصميم هوية بصرية" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">هوية بصرية مميزة تعكس قوة علامتك التجارية</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                في هيما تاتش، نقدم خدمات تصميم الهوية البصرية لمساعدتك على بناء علامة تجارية قوية ومميزة. نعمل على إنشاء هوية بصرية متكاملة تشمل الشعار، الألوان، الخطوط، والعناصر البصرية التي تعكس قيم علامتك التجارية وتجذب جمهورك المستهدف.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تصميم الشعار (Logo):</strong>
                    <span className="text-muted-foreground"> نُصمم شعارًا احترافيًا وفريدًا يعبر عن هوية علامتك التجارية ويترك انطباعًا قويًا.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">اختيار الألوان والخطوط:</strong>
                    <span className="text-muted-foreground"> نحدد لوحة الألوان والخطوط المناسبة التي تعكس شخصية علامتك وتميزك عن المنافسين.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تصميم البطاقات والمطبوعات:</strong>
                    <span className="text-muted-foreground"> نُصمم بطاقات العمل، الأوراق الرسمية، والمطبوعات التي تعزز هويتك البصرية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">دليل الهوية البصرية (Brand Guidelines):</strong>
                    <span className="text-muted-foreground"> نُنشئ دليلًا شاملاً يوضح كيفية استخدام عناصر الهوية البصرية بشكل متسق.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">فهم علامتك التجارية:</strong>
                    <span className="text-muted-foreground"> نبدأ بدراسة قيم علامتك، جمهورك المستهدف، ورسالتك التجارية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تطوير المفاهيم:</strong>
                    <span className="text-muted-foreground"> نُقدم لك عدة مقترحات تصميمية مبتكرة تعكس رؤيتك.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التنفيذ النهائي:</strong>
                    <span className="text-muted-foreground"> نُنهي التصميمات ونُسلمك جميع الملفات بصيغ متعددة جاهزة للاستخدام.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    ابدأ تصميم هويتك
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/nstMM9nM/image-10.png" 
                  alt="الهوية البصرية" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">هوية تجارية مميزة</h3>
                  <p className="text-muted-foreground mb-4">
                    احصل على هوية بصرية احترافية تعكس قيمك وتميزك عن المنافسين
                  </p>
                  <Link to="/#contact">
                    <Button className="w-full">تواصل معنا</Button>
                  </Link>
                </div>
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

export default VisualIdentity;
