import { Megaphone, Palette, Video, Code, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "الحملات الإعلانية",
      description: "استراتيجيات تسويقية مبتكرة تضمن وصولك لجمهورك المستهدف وزيادة مبيعاتك بشكل ملحوظ.",
      link: "/services/advertising-campaigns"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "الهوية البصرية",
      description: "تصاميم عصرية وجذابة تعكس هويتك التجارية وتترك انطباعاً لا يُنسى لدى عملائك.",
      link: "/services/visual-identity"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "الموشن جرافيك",
      description: "فيديوهات احترافية ومونتاج إبداعي يروي قصتك بطريقة تجذب الانتباه وتحقق التفاعل.",
      link: "/services/motion-graphics"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "تطوير المواقع",
      description: "مواقع إلكترونية متطورة وسريعة، مصممة خصيصاً لتحقيق أهدافك التجارية.",
      link: "/services/web-development"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "إدارة السوشيال ميديا",
      description: "إدارة احترافية لحساباتك على منصات التواصل الاجتماعي مع محتوى جذاب ومتابعة مستمرة.",
      link: "/services/social-media"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "الاستشارات التسويقية",
      description: "استشارات متخصصة لتطوير استراتيجياتك التسويقية وتحقيق أهدافك بأفضل الطرق.",
      link: "/services/consulting"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-hover rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground">
            خدماتنا <span className="gradient-text">المتميزة</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الإبداعية التي تساعدك على التميز والنمو في عالم الأعمال الرقمي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="group border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift hover:shadow-[var(--shadow-premium)] bg-card/80 backdrop-blur-sm overflow-hidden h-full animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 lg:p-10 relative">
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-hover group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            هل تبحث عن خدمة محددة؟
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all duration-300 cursor-pointer"
          >
            تواصل معنا للمزيد
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
