import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SEO = () => {
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
              تحسين محركات البحث
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <Search className="w-20 h-20 text-primary" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/bjh0PNHZ/image-8.png"
              alt="تحسين محركات البحث SEO" 
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">ظهور أقوى في محركات البحث</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                في هيما تاتش، نقدم خدمات تحسين محركات البحث (SEO) لمساعدتك على الظهور في النتائج الأولى على Google وجذب المزيد من العملاء المحتملين بشكل طبيعي ومستدام. نعتمد على أفضل الممارسات والأدوات المتقدمة لضمان تحسين موقعك وزيادة ظهوره.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل الموقع والكلمات المفتاحية:</strong>
                    <span className="text-muted-foreground"> نُجري تحليلًا شاملاً لموقعك ونحدد الكلمات المفتاحية المناسبة التي يبحث عنها جمهورك المستهدف.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحسين المحتوى والصفحات:</strong>
                    <span className="text-muted-foreground"> نُحسِّن محتوى موقعك ليكون متوافقًا مع معايير محركات البحث ويقدم قيمة حقيقية للزوار.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">بناء الروابط الخارجية (Backlinks):</strong>
                    <span className="text-muted-foreground"> نعمل على بناء روابط قوية من مواقع موثوقة لتحسين سلطة موقعك وترتيبه في نتائج البحث.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحسين السرعة والأداء:</strong>
                    <span className="text-muted-foreground"> نُحسِّن سرعة تحميل موقعك وأدائه التقني لضمان تجربة مستخدم مثالية وترتيب أفضل.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تقارير دورية وتحليل النتائج:</strong>
                    <span className="text-muted-foreground"> نقدم تقارير شهرية توضح تقدم موقعك في محركات البحث ونقاط التحسين المستقبلية.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل شامل:</strong>
                    <span className="text-muted-foreground"> نبدأ بتحليل موقعك الحالي، المنافسين، والكلمات المفتاحية الأكثر فعالية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">وضع الاستراتيجية:</strong>
                    <span className="text-muted-foreground"> نُنشئ خطة SEO مخصصة تشمل تحسين المحتوى، الروابط، والأداء التقني.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التنفيذ والمتابعة:</strong>
                    <span className="text-muted-foreground"> نبدأ في تطبيق الاستراتيجية ونراقب النتائج باستمرار لتحقيق أفضل ترتيب ممكن.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    احصل على تحليل مجاني
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/bjh0PNHZ/image-8.png" 
                  alt="تحسين محركات البحث" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">هل موقعك يحتاج SEO؟</h3>
                  <p className="text-muted-foreground mb-4">
                    احصل على تحليل مجاني لموقعك واكتشف فرص التحسين المتاحة
                  </p>
                  <Link to="/#contact">
                    <Button className="w-full">تحليل مجاني</Button>
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

export default SEO;
