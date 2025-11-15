import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد السعيد",
      position: "مدير تسويق - شركة النجاح",
      content: "تعاملنا مع HEMA TOUCH كان تجربة استثنائية. الاحترافية والإبداع في كل تفصيل. حققنا نتائج فاقت توقعاتنا بكثير!",
      rating: 5
    },
    {
      name: "فاطمة محمد",
      position: "صاحبة مشروع - متجر الأناقة",
      content: "فريق رائع ومتفاني. ساعدوني في بناء هوية علامتي التجارية من الصفر. الآن لدي حضور قوي على وسائل التواصل ومبيعات متزايدة.",
      rating: 5
    },
    {
      name: "خالد العتيبي",
      position: "رئيس تنفيذي - مؤسسة الرؤية",
      content: "خبرة عميقة وفهم شامل لاحتياجات السوق. حملتهم التسويقية حققت لنا زيادة 250% في الوعي بالعلامة التجارية.",
      rating: 5
    },
    {
      name: "مريم الحربي",
      position: "مديرة مطعم - بيت الذواقة",
      content: "محتوى مرئي مذهل! الفيديوهات والتصاميم التي أنتجوها لنا جعلت مطعمنا الأكثر شهرة في المنطقة. شكراً للفريق المبدع.",
      rating: 5
    },
    {
      name: "عبدالله الغامدي",
      position: "مؤسس - تطبيق تقني",
      content: "طوروا لنا موقعاً إلكترونياً سريعاً وجميلاً. تجربة المستخدم رائعة والتصميم عصري. ننصح بهم بشدة!",
      rating: 5
    },
    {
      name: "نورة القحطاني",
      position: "صاحبة عيادة - عيادة الصحة",
      content: "إدارة احترافية لحساباتنا على السوشيال ميديا. المحتوى جذاب والتفاعل ممتاز. عدد المرضى زاد بشكل ملحوظ!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            آراء <span className="text-primary">عملائنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            رضا عملائنا هو أكبر دليل على جودة خدماتنا واحترافية فريقنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border-2 hover:border-primary transition-all duration-300 hover-lift hover:shadow-[var(--shadow-elegant)] bg-card"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-bold text-lg text-foreground mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground font-medium">رضا العملاء</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+100</div>
            <div className="text-sm text-muted-foreground font-medium">قصة نجاح نرويها</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+200</div>
            <div className="text-sm text-muted-foreground font-medium">عميل راضٍ</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground font-medium">دعم مستمر</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
