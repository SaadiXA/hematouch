import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/hematouch", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/hematouch", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/hematouch", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/hematouch", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@hematouch", label: "YouTube" }
  ];

  const footerLinks = {
    company: [
      { label: "من نحن", href: "#" },
      { label: "خدماتنا", href: "#services" },
      { label: "أعمالنا", href: "#portfolio" },
      { label: "تواصل معنا", href: "#contact" }
    ],
    services: [
      { label: "التسويق الرقمي", href: "#services" },
      { label: "التصميم الإبداعي", href: "#services" },
      { label: "إنتاج المحتوى", href: "#services" },
      { label: "تطوير المواقع", href: "#services" }
    ],
    legal: [
      { label: "سياسة الخصوصية", href: "#" },
      { label: "شروط الاستخدام", href: "#" },
      { label: "سياسة الاسترجاع", href: "#" }
    ]
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
            <div className="flex gap-3">
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

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-foreground">الشركة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-foreground">الخدمات</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </a>
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
