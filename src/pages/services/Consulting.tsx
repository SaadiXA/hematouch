import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Consulting = () => {
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
              الاستشارات التسويقية
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <Lightbulb className="w-20 h-20 text-primary" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/ch2h3X0K/image-4.png"
              alt="الاستشارات التسويقية والتقنية" 
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">خبراء في خدمتك</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                في هيما تاتش، نحن وكالة سعودية متخصصة في التسويق الرقمي، نساعد الشركات والعلامات التجارية على بناء حضور رقمي قوي وتحقيق النمو المستدام. نقدم حلولًا مبتكرة تشمل إدارة وسائل التواصل الاجتماعي، تحسين محركات البحث (SEO)، تصميم المواقع والتطبيقات، والإعلانات الرقمية، لضمان وصولك إلى جمهورك المستهدف بفعالية.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل الوضع الحالي:</strong>
                    <span className="text-muted-foreground"> نُجري تحليلًا شاملاً لأعمالك، منافسيك، وجمهورك المستهدف لتحديد نقاط القوة وفرص التحسين.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">وضع استراتيجيات مخصصة:</strong>
                    <span className="text-muted-foreground"> نُنشئ خطط تسويقية وتقنية مصممة خصيصًا لتحقيق أهدافك وتعزيز نموك.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحسين الأداء:</strong>
                    <span className="text-muted-foreground"> نقدم توصيات عملية لتحسين أداء حملاتك، موقعك، وحساباتك على وسائل التواصل.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">دعم مستمر:</strong>
                    <span className="text-muted-foreground"> نوفر لك الدعم والمشورة المستمرة لضمان نجاح استراتيجياتك على المدى الطويل.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ما يميزنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">الابتكار:</strong>
                    <span className="text-muted-foreground"> نقدم حلولًا إبداعية تواكب أحدث الاتجاهات في التسويق الرقمي.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">الخبرة:</strong>
                    <span className="text-muted-foreground"> فريقنا من المتخصصين ذوي الخبرة الواسعة في مختلف مجالات التسويق الرقمي.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">النتائج القابلة للقياس:</strong>
                    <span className="text-muted-foreground"> نعمل معك خطوة بخطوة لتحويل أفكارك إلى نجاح رقمي ملموس.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التطور المستمر:</strong>
                    <span className="text-muted-foreground"> نواكب أحدث الاتجاهات في التسويق الرقمي لضمان بقاء عملائنا في المقدمة.</span>
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
                  src="https://i.ibb.co/ch2h3X0K/image-4.png" 
                  alt="الاستشارات التسويقية" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">استشارة مجانية</h3>
                  <p className="text-muted-foreground mb-4">
                    احصل على استشارة مجانية من خبرائنا لتطوير استراتيجيتك الرقمية
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

export default Consulting;
