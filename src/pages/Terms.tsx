import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FileCheck, CheckCircle2 } from "lucide-react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const terms = [
    "لا تقدم هيما تاتش أي خدمات تتعارض مع أحكام الشريعة الإسلامية أو الآداب العامة أو القوانين المعمول بها في المملكة العربية السعودية.",
    "يلتزم العميل بتوفير المستندات الرسمية التي تُثبت إمكانية مزاولة النشاط التجاري داخل المملكة العربية السعودية.",
    "يجب أن تكون جميع المنتجات المقدمة من قِبل العميل أصلية، ومتوافقة مع الشروط والمواصفات المعتمدة في الأنظمة المحلية.",
    "لا يتم البدء في تنفيذ الخدمة إلا بعد تحويل كامل المبلغ أو على الأقل 50% منه (وفق تقدير الإدارة)، ويجب على العميل تزويد المؤسسة بجميع المعلومات اللازمة لإتمام العمل.",
    "العميل مسؤول عن حماية حساباته الإلكترونية والمالية وبياناته الخاصة، ولا تتحمل مؤسسة هيما تاتش أي مسؤولية قانونية تجاه ذلك.",
    "تقع التكاليف الإضافية مثل رسوم الاشتراكات الشهرية للمنصات الخارجية على عاتق العميل بالكامل.",
    "تعود ملكية الحقوق الفكرية، بما في ذلك التصاميم والفيديوهات، إلى هيما تاتش إلى أن يتم سداد كامل المستحقات، وبعدها تُنقل ملكيتها إلى العميل.",
    "يوافق العميل على استخدام هيما تاتش للتصاميم والمتاجر التي قامت بتنفيذها لأغراض دعائية وتسويقية.",
    "تقع مسؤولية مراجعة التصميمات والنصوص والبيانات على العميل، ولا تتحمل هيما تاتش مسؤولية عن أي أخطاء أو نقص.",
    "توفير الشعارات، الصور عالية الجودة، والنصوص المدققة يكون على مسؤولية العميل. وإذا تعذر عليه ذلك، يمكن تفويض هيما تاتش مقابل تكاليف إضافية.",
    "تحتفظ هيما تاتش بحق إلغاء الخدمة بعد دراسة الحالة، ويُعاد أي مبلغ مستحق للعميل خلال 30 يومًا من تاريخ الإلغاء.",
    "في حال إلغاء الخدمة من طرف العميل بعد البدء بتنفيذها، لا يمكن استرجاع المبلغ بالكامل ويتم تقدير المبلغ القابل للاسترجاع من قِبل الإدارة.",
    "الواتساب هو وسيلة التواصل الرسمية المعتمدة لدى هيما تاتش.",
    "تحتفظ هيما تاتش بحق تعديل بنود الشروط والأحكام في أي وقت دون الرجوع للعميل.",
    "يعتبر سداد العميل لمبلغ الاشتراك موافقةً صريحة على جميع الشروط والأحكام المذكورة."
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
                <FileCheck className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 gradient-text">
                الشروط والأحكام
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                الشروط العامة للتعامل مع هيما تاتش
              </p>
            </div>

            {/* Terms List */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                الشروط العامة
              </h2>
              
              <div className="space-y-6">
                {terms.map((term, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 items-start group hover:bg-muted/50 p-4 rounded-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed flex-1">
                      {term}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Message */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 text-center">
              <p className="text-lg md:text-xl text-foreground font-medium">
                باستخدامك لخدماتنا، فإنك توافق على هذه الشروط والأحكام.
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

export default Terms;
