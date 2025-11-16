import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WebDevelopment = () => {
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
              تطوير المواقع الإلكترونية
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <Code className="w-20 h-20 text-primary" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/xSk2G2hp/image-17.png"
              alt="إنشاء و تطوير موقع إلكتروني" 
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">تصميم وتطوير موقع إلكتروني احترافي</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                هل تبحث عن موقع إلكتروني احترافي يعكس هوية علامتك التجارية؟ في هيما تاتش، نقدم لك حلولاً متكاملة لإنشاء موقع إلكتروني مميز يساعدك على تعزيز تواجدك الرقمي، جذب العملاء، وتحقيق أهدافك التجارية. نعتمد على أحدث التقنيات في تصميم وتطوير المواقع، مع تحسين الأداء، توافق المواقع مع جميع الأجهزة، وتجربة مستخدم سلسة لضمان أفضل النتائج.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <p className="text-muted-foreground mb-4">
                في هيما تاتش، نقدم خدمات متكاملة لإنشاء المواقع الإلكترونية، مما يساعدك على تحقيق حضور قوي، تجربة مستخدم مميزة، ونمو مستدام. إليك ما نقدمه لك:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل احتياجات الموقع:</strong>
                    <span className="text-muted-foreground"> نقوم بدراسة نشاطك التجاري والجمهور المستهدف لوضع خطة متكاملة لإنشاء موقع يلبي احتياجاتك ويساعدك في تحقيق أهدافك.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تصميم الموقع (UI/UX):</strong>
                    <span className="text-muted-foreground"> نُصمم واجهات احترافية وجذابة، مع تجربة مستخدم سلسة تضمن سهولة التصفح وتعزز هوية علامتك التجارية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تطوير الموقع وبرمجته:</strong>
                    <span className="text-muted-foreground"> نستخدم أحدث التقنيات لتطوير موقع سريع، متجاوب، وآمن، مع ضمان توافقه مع جميع الأجهزة والمتصفحات.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل الأداء والتقارير الدورية:</strong>
                    <span className="text-muted-foreground"> نوفر تقارير تفصيلية عن أداء الموقع، عدد الزوار، معدل التحويل، ونقاط التحسين لضمان أفضل النتائج لمشروعك الرقمي.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <p className="text-muted-foreground mb-4">
                في هيما، نضمن لك تجربة سلسة واحترافية في إنشاء موقع إلكتروني. إليك خطوات بدء التعاون معنا:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">احجز استشارة:</strong>
                    <span className="text-muted-foreground"> نبدأ بمكالمة استشارية لفهم نشاطك التجاري، أهدافك، والجمهور المستهدف.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل الوضع الحالي:</strong>
                    <span className="text-muted-foreground"> نُجري تحليلًا دقيقًا لمتطلباتك ونحدد أفضل الحلول التقنية والتصميمية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">وضع الاستراتيجية:</strong>
                    <span className="text-muted-foreground"> نُنشئ خطة تصميم وتطوير مخصصة تشمل تجربة المستخدم، واجهة المستخدم، ووظائف الموقع.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">البدء في التنفيذ والمتابعة:</strong>
                    <span className="text-muted-foreground"> نبدأ في تصميم الموقع، برمجته، واختباره لضمان تجربة مثالية، مع تقديم الدعم الفني المستمر.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    احجز استشارة مجانية
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/xSk2G2hp/image-17.png" 
                  alt="تطوير المواقع" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">هل لديك مشروع؟</h3>
                  <p className="text-muted-foreground mb-4">
                    تواصل معنا الآن للحصول على استشارة مجانية وتحويل فكرتك إلى موقع إلكتروني ناجح
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

export default WebDevelopment;
