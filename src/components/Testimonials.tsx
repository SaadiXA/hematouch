import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "ياسر مسعود",
      position: "المدير التنفيذي - متجر تيك حاسوبي",
      content: "ما قدمته لي \"هيما تاتش\" لم يكن مجرد تصميم متجر إلكتروني… بل مشروع متكامل يبيع نفسه بنفسه. بفضل الله ثم احترافيتهم، صار عندي منصة تبيع بثبات، بسرعة طلب لا تتجاوز الدقيقة، وتجربة مستخدم محسوبة بدقة. ما احتجت أعتمد على حملات إعلانية ضخمة، والنتائج تتكلم عن نفسها. أنصح بكل ثقة.",
      rating: 5
    },
    {
      name: "سارة القحطاني",
      position: "مالكة فندق",
      content: "الفريق الاحترافي في هيما تاتش فهم احتياجاتنا بشكل أعمق مما كنا نتوقع. النتائج التي حققناها تجاوزت توقعاتنا بكثير. أنصح أي صاحب عمل بالتعامل معهم",
      rating: 5
    },
    {
      name: "حسين البديدي",
      position: "المدير التنفيذي - متجر ميس روح",
      content: "كانت تجربة مختلفة مع هالشركة. ما اكتفوا بتصميم متجر، صنعوا لي حل كامل يخدم العميل قبل ما يخدمني أنا. الطلب سريع، والشراء أسهل مما توقعت. ارتحت معاهم كثير.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary">شركاؤنا في النجاح</span> يتحدثون
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            النتائج هي شهادتنا الحقيقية، ورضا عملائنا هو فخرنا الأكبر.
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
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
