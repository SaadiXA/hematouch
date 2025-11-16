import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Lock, FileText, RefreshCw, Database, UserCheck, Cookie } from "lucide-react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "شروط الاستخدام",
      content: "باستخدامك لموقع هيما تاتش، فإنك توافق على الالتزام بالشروط والسياسات المعروضة، وتتعهد بعدم استخدام الموقع لأغراض غير قانونية أو غير مصرح بها."
    },
    {
      icon: Lock,
      title: "حماية الحساب",
      content: "يقع على عاتق العميل مسؤولية الحفاظ على سرية معلومات الحساب وكلمة المرور، ويتعهد بعدم مشاركتها مع أي طرف ثالث."
    },
    {
      icon: Shield,
      title: "المحتوى وحقوق الملكية",
      content: "جميع محتويات الموقع، من نصوص وصور وشعارات، هي ملكية حصرية لموقع هيما تاتش. يُمنع نسخ أو إعادة استخدام أي محتوى دون إذن خطي مسبق."
    },
    {
      icon: RefreshCw,
      title: "التحديثات والتعديلات",
      content: "يحتفظ موقع هيما تاتش بالحق في تعديل أو تحديث سياسة الاستخدام والخصوصية متى دعت الحاجة، وسيتم إخطار العملاء بأي تغييرات عبر الموقع."
    },
    {
      icon: Database,
      title: "جمع البيانات",
      content: "نقوم بجمع بعض البيانات الشخصية عند إنشاء حساب أو إجراء طلب، مثل: الاسم، البريد الإلكتروني، العنوان، ورقم الجوال. تُستخدم هذه البيانات لتحسين تجربتك وتنفيذ الطلبات، ولن تتم مشاركتها مع أي طرف ثالث إلا عند الضرورة أو بموافقتك."
    },
    {
      icon: Shield,
      title: "حماية البيانات",
      content: "نلتزم بحماية بياناتك الشخصية من الوصول غير المصرح به، ونستخدم أحدث تقنيات الأمان والتشفير لضمان حماية معلوماتك."
    },
    {
      icon: UserCheck,
      title: "حقوق المستخدم",
      content: "يحق لك الوصول إلى بياناتك الشخصية وتحديثها أو طلب حذفها في أي وقت، عبر التواصل مع فريق خدمة العملاء لدينا."
    },
    {
      icon: Cookie,
      title: "ملفات تعريف الارتباط",
      content: "نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح وتخصيص المحتوى بما يتناسب مع تفضيلاتك. يمكنك تعطيلها من إعدادات المتصفح، ولكن قد يؤثر ذلك على بعض ميزات الموقع."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 gradient-text">
                سياسة الخصوصية
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                في هيما تاتش، نلتزم بتقديم تجربة تصفح وتسوق آمنة وموثوقة، مع ضمان حماية خصوصيتكم وحقوقكم. توضح هذه السياسة شروط استخدام الموقع وآلية تعاملنا مع بياناتكم الشخصية.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {section.title}
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Message */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 text-center">
              <p className="text-lg md:text-xl text-foreground font-medium">
                نحن في هيما تاتش نحرص دائمًا على تقديم خدمة آمنة وشفافة، مع احترام كامل لخصوصيتكم.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;
