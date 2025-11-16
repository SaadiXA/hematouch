import { ArrowLeft, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroCompass from "@/assets/hero-compass.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 px-3 md:px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCompass} 
          alt="Compass Navigation" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-[zoom_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,100,0,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated Particles Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Compass Icon */}
      <div className="absolute top-1/4 left-1/4 opacity-10 hidden lg:block">
        <Compass className="w-96 h-96 text-primary animate-spin" style={{ animationDuration: '60s' }} />
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <Card className="bg-card/90 backdrop-blur-2xl border-2 border-border/50 shadow-[var(--shadow-premium)] overflow-hidden animate-scale-in">
            <CardContent className="p-8 md:p-12 lg:p-20 text-center">
              {/* Main Heading - Arabic */}
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 md:mb-8 leading-tight animate-fade-up">
                <span className="text-foreground">إتجاهــك </span>
                <span className="gradient-text">الصح</span>
                <span className="text-foreground"> يبــدأ من هنــا</span>
              </h1>

              {/* English Subtitle */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-8 md:mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                The Right Direction Starts Here
              </p>

              {/* Divider */}
              <div className="w-32 md:w-40 h-1.5 bg-gradient-to-r from-primary via-primary-hover to-primary mx-auto mb-8 md:mb-10 rounded-full animate-fade-up" style={{ animationDelay: '0.3s' }}></div>

              {/* Main Tagline */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                كــــل رحلـــــة تبـــــدأ بالبوصلـــــة
              </h2>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/80 mb-10 md:mb-14 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                لتصـــل للنتائــج
              </h3>

              {/* English Translation */}
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
                Every journey begins with the compass & ends with measurable results
              </p>

              {/* CTA Button - Premium Enhanced */}
              <div className="flex flex-col items-center justify-center animate-fade-up" style={{ animationDelay: '0.7s' }}>
                <a
                  href="https://wa.me/966533982399?text=مرحباً، أريد الاستفسار عن خدماتكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary via-primary-hover to-primary hover:from-primary-hover hover:via-primary hover:to-primary-hover text-primary-foreground font-extrabold rounded-full px-8 sm:px-12 md:px-20 py-6 sm:py-7 md:py-10 text-lg sm:text-xl md:text-3xl shadow-[var(--shadow-premium)] hover:shadow-[0_30px_100px_-20px_rgba(255,100,0,0.6)] hover:-translate-y-3 hover:scale-105 transition-all duration-500 group relative overflow-hidden mx-auto"
                >
                  <span className="relative z-10">تواصل معنا الآن</span>
                  <ArrowLeft className="mr-2 sm:mr-3 md:mr-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-4 sm:mt-6 font-medium text-center">
                  احصل على استشارة مجانية الآن
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Hero;
