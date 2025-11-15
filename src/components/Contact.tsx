import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      content: "hema.touch2025@gmail.com",
      link: "mailto:hema.touch2025@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف",
      content: "+966-533982399",
      link: "tel:+966533982399"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "الموقع",
      content: "نجران، الطابق 3، سمارت سنتر، 4799 طريق الملك فيصل بن عبد العزيز، 8191 حي الفيصلية، 66271",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            تواصل <span className="text-primary">معنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا الآن لنبدأ مشروعك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 hover:border-primary transition-all duration-300 shadow-[var(--shadow-elegant)]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">
                    الاسم الكامل
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    required
                    className="text-right border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">
                    البريد الإلكتروني
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="text-right border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">
                    رقم الهاتف
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 50 123 4567"
                    required
                    className="text-right border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">
                    رسالتك
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="أخبرنا عن مشروعك..."
                    required
                    rows={5}
                    className="text-right border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-bold py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">معلومات التواصل</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="group border-2 hover:border-primary transition-all duration-300 hover-lift"
                  >
                    <CardContent className="p-6">
                      <a
                        href={info.link}
                        className="flex items-start gap-4"
                      >
                        <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1 text-foreground">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {info.content}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4 text-foreground">ساعات العمل</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-medium">السبت - الخميس:</span>
                    <span>08:00 ص - 10:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">الجمعة:</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
