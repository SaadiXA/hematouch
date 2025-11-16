import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import socialIcon from "@/assets/services/social-media-icon.png";
import socialBanner from "@/assets/services/social-media-banner.jpg";
import { Sparkles, Target, Users, TrendingUp } from "lucide-react";

const SocialMediaService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إدارة وسائل التواصل الاجتماعي";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              إدارة وسائل التواصل الاجتماعي
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <img src={socialIcon} alt="إدارة وسائل التواصل الاجتماعي" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={socialBanner}
              alt="إدارة وسائل التواصل الاجتماعي" 
              className="w-full h-auto object-cover"
            />
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
