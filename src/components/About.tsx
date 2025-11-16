import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              من <span className="text-primary">نحن</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <Card className="bg-card/80 backdrop-blur-xl border-2 border-border shadow-[var(--shadow-elegant)] mb-12">
            <CardContent className="p-10 md:p-16">
              <p className="text-xl text-foreground leading-relaxed mb-6 text-center">
                وكالتنا للتسويق متكاملة تأسست بهدف دعم العلامات التجارية بفاعلية من خلال تقديم حلول تسويقية وتنفيذية تتيح لها النمو والتفوق في السوق السعودي.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                نسعى لتوفير كل ما تحتاجه العلامة التجارية من استراتيجيات وأدوات لتحقيق أهدافها التجارية والتواصل بفعالية مع جمهورها. عملاؤنا دائماً في قلب اهتماماتنا مما يدفعنا لتقديم أفضل الحلول المبتكرة والخدمات عالية الجودة التي تضمن تحقيق تطلعاتهم.
              </p>
              
              <div className="flex justify-center">
                <a
                  href="https://wa.me/966533982399?text=مرحباً، أريد الاستفسار عن خدماتكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-bold rounded-full px-10 py-6 text-lg shadow-[var(--shadow-glow)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  تواصل معنا الآن
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-border hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون الشريك الأول للعلامات التجارية في تحقيق النمو والتميز
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-border hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">مهمتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تقديم حلول تسويقية مبتكرة تحقق نتائج استثنائية قابلة للقياس
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-border hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">قيمنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  الإبداع، الاحترافية، والالتزام بتحقيق أهداف عملائنا
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
