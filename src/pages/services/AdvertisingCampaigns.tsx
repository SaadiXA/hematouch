import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import advertisingIcon from "@/assets/services/advertising-icon.png";
import advertisingBanner from "@/assets/services/advertising-banner.jpg";

const AdvertisingCampaigns = () => {
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
              إدارة الحملات الإعلانية
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <img src={advertisingIcon} alt="إدارة الحملات الإعلانية" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={advertisingBanner}
              alt="إدارة الحملات الإعلانية" 
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">حملات إعلانية احترافية تحقق نتائج ملموسة</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                في هيما تاتش، نقدم خدمات إدارة الحملات الإعلانية على منصات متعددة مثل Google Ads، Facebook Ads، Instagram، TikTok، وSnapchat. نساعدك على الوصول إلى جمهورك المستهدف بدقة، وزيادة المبيعات، وتحقيق أعلى عائد على الاستثمار (ROI).
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل الجمهور المستهدف:</strong>
                    <span className="text-muted-foreground"> نحدد جمهورك بدقة بناءً على الاهتمامات، السلوك، والديموغرافيا لضمان وصول إعلاناتك للأشخاص المناسبين.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">إنشاء حملات إعلانية فعالة:</strong>
                    <span className="text-muted-foreground"> نصمم إعلانات جذابة ونصوص إعلانية مؤثرة تلفت انتباه الجمهور وتحفزهم على التفاعل.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">إدارة الميزانية بذكاء:</strong>
                    <span className="text-muted-foreground"> نحسن توزيع ميزانيتك الإعلانية لتحقيق أفضل النتائج بأقل التكاليف الممكنة.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل النتائج والتحسين المستمر:</strong>
                    <span className="text-muted-foreground"> نراقب أداء الحملات باستمرار ونجري التعديلات اللازمة لتحسين النتائج وزيادة العائد على الاستثمار.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">احجز استشارة:</strong>
                    <span className="text-muted-foreground"> نبدأ بفهم أهدافك التسويقية، ميزانيتك، والجمهور المستهدف.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">وضع الاستراتيجية:</strong>
                    <span className="text-muted-foreground"> نُنشئ خطة إعلانية مخصصة تشمل المنصات المناسبة، نوع الإعلانات، والرسائل التسويقية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">إطلاق الحملة والمتابعة:</strong>
                    <span className="text-muted-foreground"> نبدأ في تشغيل الحملات ونراقب الأداء بشكل يومي لضمان أفضل النتائج.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    ابدأ حملتك الآن
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/XxzcnCH4/Gemini-Generated-Image-jknwn6jknwn6jknw.jpg" 
                  alt="الحملات الإعلانية" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">استشارة مجانية</h3>
                  <p className="text-muted-foreground mb-4">
                    احصل على استشارة مجانية لتحليل وضعك الحالي وتحديد أفضل استراتيجية إعلانية
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

export default AdvertisingCampaigns;
