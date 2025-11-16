import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ecommerceIcon from "@/assets/services/ecommerce-icon.png";
import ecommerceBanner from "@/assets/services/ecommerce-banner.jpg";

const EcommerceStores = () => {
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
              إنشاء المتاجر الإلكترونية
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <img src={ecommerceIcon} alt="بناء وإدارة المتاجر الإلكترونية" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={ecommerceBanner}
              alt="بناء وإدارة المتاجر الإلكترونية" 
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">إنشاء وتصميم وتطوير المتاجر الإلكترونية</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                في هيما تاتش، نقدم حلولاً متكاملة لإنشاء متجرك الإلكتروني، مما يساعدك على تحقيق مبيعات أكبر، وصول أوسع، ونمو مستدام. نقوم بإنشاء متجر إلكتروني احترافي يعكس هوية علامتك التجارية ويوفر تجربة مستخدم سلسة لعملائك.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تجربة مستخدم سلسة:</strong>
                    <span className="text-muted-foreground"> نصمم متجرك ليكون سهل الاستخدام، متجاوبًا مع جميع الأجهزة، وذو واجهة جذابة تعزز ثقة العملاء وتحفزهم على الشراء.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تصميم وتطوير المتجر:</strong>
                    <span className="text-muted-foreground"> ننتج محتوى إبداعيًا جذابًا، يشمل التصميمات الاحترافية والكتابة التسويقية المؤثرة التي تعكس هوية علامتك التجارية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">إضافة المنتجات وإدارتها بسهولة:</strong>
                    <span className="text-muted-foreground"> نوفر لك لوحة تحكم متكاملة لإضافة المنتجات، تعديلها، وإدارتها بكل سهولة.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحسين محركات البحث (SEO):</strong>
                    <span className="text-muted-foreground"> نُحسِّن متجرك الإلكتروني ليظهر في نتائج البحث الأولى، مما يزيد من عدد الزوار المحتملين ويرفع من نسبة المبيعات.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">احجز استشارة:</strong>
                    <span className="text-muted-foreground"> نُنشئ خطة مخصصة تشمل تصميم المتجر، تجربة المستخدم، وربط بوابات الدفع والشحن.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل الاحتياجات:</strong>
                    <span className="text-muted-foreground"> نُجري تحليلًا دقيقًا لمتطلبات متجرك، ونحدد الميزات اللازمة لضمان تجربة شراء مثالية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">البدء في التطوير والإطلاق:</strong>
                    <span className="text-muted-foreground"> نبدأ في تطوير المتجر، إضافة المنتجات، ثم نُطلقه رسميًا مع متابعة الأداء وتحسينه باستمرار.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    ابدأ متجرك الإلكتروني
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/5xs8ymQs/image-1-removebg-preview-1-1.png" 
                  alt="المتاجر الإلكترونية" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">متجر إلكتروني ناجح</h3>
                  <p className="text-muted-foreground mb-4">
                    حوّل فكرتك إلى متجر إلكتروني احترافي يحقق مبيعات متزايدة
                  </p>
                  <Link to="/#contact">
                    <Button className="w-full">ابدأ الآن</Button>
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

export default EcommerceStores;
