import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import eventsIcon from "@/assets/services/events-icon.png";
import eventsBanner from "@/assets/services/events-banner.jpg";

const EventsService = () => {
  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إدارة الفعاليات والسمعة";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={eventsBanner} 
            alt="إدارة الفعاليات والسمعة" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img src={eventsIcon} alt="Events Management Icon" className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              إدارة الفعاليات والسمعة
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                في HEMA Touch، نجمع بين الإبداع والتنفيذ المحترف لبناء تجربة متكاملة — من الفكرة إلى اللحظة الختامية — بحيث يظل الحدث في الذاكرة.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">ماذا نقدّم؟</h2>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>إعداد وتنظيم الحدث:</strong> نبدأ بتحليل أهدافك وجمهورك، ونضع خطة كاملة تشمل الفكرة الإبداعية والتصميم البصري وتجربة الحضور.
                </li>
                <li className="text-lg">
                  <strong>إدارة التنفيذ في الموقع:</strong> نُشرف على كل تفاصيل اليوم — من تجهيز المكان والصوت والإضاءة، إلى تنسيق الفرق والضيوف، لضمان سير الحفل بسلاسة واحتراف.
                </li>
                <li className="text-lg">
                  <strong>تصميم هوية بصرية مخصصة للفعالية:</strong> نُبتكر شعاراً مؤقتاً، دعوات، ديكورات، مواد ترويجية تحمل بصمة علامتك وتتماشى مع هويتك.
                </li>
                <li className="text-lg">
                  <strong>الترويج والتغطية الإعلامية:</strong> نُشغّل الحملات الرقمية قبل وأثناء وبعد، مع تغطية فوتوغرافية وفيديو احترافية — لإبراز الحدث والدفع بنتائجك.
                </li>
                <li className="text-lg">
                  <strong>تحليل النتائج والتقارير:</strong> بعد انتهاء الفعالية، نقدّم تقريراً مفصّلاً عن الحضور، التفاعل، والأثر التسويقي — لتتطلع بخبرة قيّمة من كل تجربة.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">أسئلة شائعة</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ما أنواع الفعاليات التي تنظمونها؟</h3>
                  <p className="text-lg text-muted-foreground">نشرف على جميع الفعاليات، إطلاق العلامات التجارية، المعارض، الاحتفالات الخاصة والعامة — باحترافية عالية وطاقم متخصص.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل يمكنكم تنفيذ الفعالية في أي مدينة؟</h3>
                  <p className="text-lg text-muted-foreground">نعم، نعمل في جميع المدن بالتعاون مع شركائنا المحليين لضمان تجربة HEMA Touch أينما كانت الفعالية.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">أيمكن الاستعانة بخدمة تصميم الهوية فقط دون التنفيذ؟</h3>
                  <p className="text-lg text-muted-foreground">بالتأكيد، نُقدّم باقات مرنة تشمل تصميم الهوية أو التغطية الإعلامية فقط، حسب احتياجك.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  ابدأ فعاليتك الآن
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

export default EventsService;
