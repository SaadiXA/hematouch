import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import missrouhImg from "@/assets/portfolio/missrouh.jpg";
import tecHasubiImg from "@/assets/portfolio/tec-hasubi.jpg";
import tmyzhtfImg from "@/assets/portfolio/tmyzhtf.jpg";
import itaaImg from "@/assets/portfolio/itaa.jpg";

const Portfolio = () => {
  const stores = [
    {
      name: "تميز للهواتف",
      nameEn: "Temyz Phone Store",
      url: "https://tmyzhtf.com/",
      description: "متجر تميز للهواتف ليس مجرد متجر لبيع الأجهزة... بل منصة ذكية تلبي احتياجات عشاق التقنية بطريقة سهلة وسريعة. تصميم عملي ومرن يعكس الاحترافية ويعرض المنتجات بأعلى جودة، مع تجربة مستخدم مريحة وسلسة. نظام الفلترة والبحث مصمم لتقليل وقت التصفح وزيادة فرص الشراء. كل عنصر يساهم في بناء ثقة العميل وتحقيق أعلى معدلات التحويل.",
      image: tmyzhtfImg
    },
    {
      name: "تك حسوبي تليكوم",
      nameEn: "Tec-Hasubi Telecom",
      url: "https://tec-hasubi-telecom.com/",
      description: "متجر تك حسوبي تليكوم ليس مجرد متجر إلكتروني... بل تجربة تسوق مميزة مصممة لتحويل الزائر إلى عميل في ثوانٍ. تصميم أنيق، طلب سريع، وتجربة تسوق محسوبة بدقة — والنتيجة؟ منصة تبيع بثقة، دون الحاجة إلى حملات إعلانية ضخمة.",
      image: tecHasubiImg
    },
    {
      name: "مس روح",
      nameEn: "Missrouh",
      url: "https://missrouh.com",
      description: "متجر مس روح ليس مجرد متجر أزياء... إنه منصة فخمة تجمع بين الأناقة والجودة. تصميم ناعم وألوان راقية تفتح الشهية للأناقة، مع قائمة منتجات فاخرة وإمكانيات تسوق سهلة وسريعة. تجربة مستخدم مدروسة جيداً تدعم الثقة والتفاعل السلس — من أي جهاز.",
      image: missrouhImg
    },
    {
      name: "إيتاء الزراعي",
      nameEn: "Itaa Agricultural Store",
      url: "https://salla.sa/itaa",
      description: "منصة متخصصة تقدم حلول زراعية بواجهة عصرية وسهلة الاستخدام. التصميم يعكس الاهتمام بالطبيعة ويجسد هوية القطاع الزراعي بلمسة تقنية حديثة. تصنيف المنتجات واضح، والمحتوى منظم لتوصيل المعلومات بسرعة، مما يسهل على العملاء اتخاذ القرار. التجربة مصممة لتعزيز ثقة العملاء وتوفير رحلة شراء فعّالة تلبي احتياجات المزارعين والهواة والمحترفين.",
      image: itaaImg
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            أعمالنا تتحدث <span className="text-primary">بالنتائج</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            نحن لا نَعِدُ بالنجاح، بل نصنعه. إليك لمحة عن قصص التحول التي بنيناها مع شركائنا.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              المتاجر الإلكترونية <span className="text-primary">(E-commerce Stores)</span>
            </h3>
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stores.map((store, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover-lift hover:shadow-[var(--shadow-elegant)] bg-card"
            >
              {/* Store Image - Full Size */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={store.image} 
                  alt={store.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Store Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{store.name}</h3>
                    <p className="text-sm text-muted-foreground">{store.nameEn}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {store.description}
                </p>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(store.url, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 ml-2" />
                  زيارة المتجر
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border-2 border-primary/20 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            هل أنت مستعد لبدء <span className="text-primary">مشروعك القادم</span>؟
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            دعنا نحول رؤيتك إلى واقع ملموس يحقق أهدافك ويتجاوز توقعاتك
          </p>
          <Button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-bold rounded-full px-10 py-6 text-lg shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-premium)] hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            ابدأ مشروعك معنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
