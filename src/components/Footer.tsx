import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/hema_touch/", 
      label: "Instagram" 
    },
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ), 
      href: "https://www.tiktok.com/@hema_touch", 
      label: "TikTok" 
    },
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.206 2.024c-.948 0-1.848.184-2.674.548a6.634 6.634 0 0 0-2.186 1.492 6.634 6.634 0 0 0-1.492 2.186 6.634 6.634 0 0 0-.548 2.674c0 .948.184 1.848.548 2.674.364.826.854 1.55 1.492 2.186a6.634 6.634 0 0 0 2.186 1.492c.826.364 1.726.548 2.674.548.948 0 1.848-.184 2.674-.548a6.634 6.634 0 0 0 2.186-1.492 6.634 6.634 0 0 0 1.492-2.186c.364-.826.548-1.726.548-2.674 0-.948-.184-1.848-.548-2.674a6.634 6.634 0 0 0-1.492-2.186 6.634 6.634 0 0 0-2.186-1.492 6.634 6.634 0 0 0-2.674-.548zm0 10.42a2.496 2.496 0 1 1 0-4.992 2.496 2.496 0 0 1 0 4.992zM19.332 7.342c.413-.826.648-1.742.648-2.718 0-.826-.184-1.616-.548-2.364a5.82 5.82 0 0 0-1.492-1.95A5.82 5.82 0 0 0 15.99.31C15.24-.054 14.45-.238 13.624-.238h-2.836c-.826 0-1.616.184-2.364.548a5.82 5.82 0 0 0-1.95 1.492 5.82 5.82 0 0 0-1.492 1.95c-.364.748-.548 1.538-.548 2.364 0 .976.235 1.892.648 2.718-.413.826-.648 1.742-.648 2.718 0 .826.184 1.616.548 2.364a5.82 5.82 0 0 0 1.492 1.95 5.82 5.82 0 0 0 1.95 1.492c.748.364 1.538.548 2.364.548h2.836c.826 0 1.616-.184 2.364-.548a5.82 5.82 0 0 0 1.95-1.492 5.82 5.82 0 0 0 1.492-1.95c.364-.748.548-1.538.548-2.364 0-.976-.235-1.892-.648-2.718z"/>
        </svg>
      ), 
      href: "https://www.snapchat.com/@hema_touch", 
      label: "Snapchat" 
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: "https://m.facebook.com/hema.touch/", 
      label: "Facebook" 
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      href: "https://youtube.com/@hema_touch?si=1HgxFl5JBE6-81Fw", 
      label: "YouTube" 
    }
  ];

  const footerLinks = {
    services: [
      { label: "تصميم العلامة التجارية", href: "/services/brand-design" },
      { label: "إدارة وسائل التواصل الاجتماعي", href: "/services/social-media" },
      { label: "إنشاء المتاجر الإلكترونية", href: "/services/ecommerce" },
      { label: "إدارة الحملات الإعلانية", href: "/services/advertising" },
      { label: "التحليلات والتقارير", href: "/services/analytics" },
      { label: "إنتاج فيديو الموشن جرافيك", href: "/services/motion-graphics" },
      { label: "حملات التسويق عبر المؤثرين", href: "/services/influencer" },
      { label: "إدارة الفعاليات والسمعة", href: "/services/events" }
    ],
    legal: [
      { label: "سياسة الخصوصية", href: "/privacy" },
      { label: "الشروط والأحكام", href: "/terms" }
    ]
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-primary">HEMA</span>
              <span className="text-accent-foreground"> TOUCH</span>
            </div>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              لمستنا الإبداعية. نموك الاستثنائي. نحن نحول أفكارك إلى واقع رقمي مبهر.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-accent-foreground/80">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+966533982399" className="hover:text-primary transition-colors">
                  +966-533982399
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-accent-foreground/80">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hema.touch2025@gmail.com" className="hover:text-primary transition-colors">
                  hema.touch2025@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-accent-foreground/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span>نجران، المملكة العربية السعودية</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-foreground">خدماتنا</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-300 inline-block text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-foreground">روابط مهمة</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-300 inline-block text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-accent-foreground/70 text-sm">
            <p>
              © {currentYear} HEMA TOUCH. جميع الحقوق محفوظة.
            </p>
            <p>
              صنع بـ <span className="text-primary">❤</span> في المملكة العربية السعودية
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
