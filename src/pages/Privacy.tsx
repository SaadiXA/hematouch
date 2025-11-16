import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              سياسة الخصوصية
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl leading-relaxed mb-8">
                في هيما تاتش، نلتزم بتقديم تجربة تصفح وتسوق آمنة وموثوقة، مع ضمان حماية خصوصيتكم وحقوقكم. توضح هذه السياسة شروط استخدام الموقع وآلية تعاملنا مع بياناتكم الشخصية.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">شروط الاستخدام</h2>
              <p className="text-lg mb-6">
                باستخدامك لموقع هيما تاتش، فإنك توافق على الالتزام بالشروط والسياسات المعروضة، وتتعهد بعدم استخدام الموقع لأغراض غير قانونية أو غير مصرح بها.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">حماية الحساب</h2>
              <p className="text-lg mb-6">
                يقع على عاتق العميل مسؤولية الحفاظ على سرية معلومات الحساب وكلمة المرور، ويتعهد بعدم مشاركتها مع أي طرف ثالث.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">المحتوى وحقوق الملكية</h2>
              <p className="text-lg mb-6">
                جميع محتويات الموقع، من نصوص وصور وشعارات، هي ملكية حصرية لموقع هيما تاتش. يُمنع نسخ أو إعادة استخدام أي محتوى دون إذن خطي مسبق.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">التحديثات والتعديلات</h2>
              <p className="text-lg mb-6">
                يحتفظ موقع هيما تاتش بالحق في تعديل أو تحديث سياسة الاستخدام والخصوصية متى دعت الحاجة، وسيتم إخطار العملاء بأي تغييرات عبر الموقع.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">جمع البيانات</h2>
              <p className="text-lg mb-6">
                نقوم بجمع بعض البيانات الشخصية عند إنشاء حساب أو إجراء طلب، مثل: الاسم، البريد الإلكتروني، العنوان، ورقم الجوال. تُستخدم هذه البيانات لتحسين تجربتك وتنفيذ الطلبات، ولن تتم مشاركتها مع أي طرف ثالث إلا عند الضرورة أو بموافقتك.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">حماية البيانات</h2>
              <p className="text-lg mb-6">
                نلتزم بحماية بياناتك الشخصية من الوصول غير المصرح به، ونستخدم أحدث تقنيات الأمان والتشفير لضمان حماية معلوماتك.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">حقوق المستخدم</h2>
              <p className="text-lg mb-6">
                يحق لك الوصول إلى بياناتك الشخصية وتحديثها أو طلب حذفها في أي وقت، عبر التواصل مع فريق خدمة العملاء لدينا.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">ملفات تعريف الارتباط</h2>
              <p className="text-lg mb-6">
                نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح وتخصيص المحتوى بما يتناسب مع تفضيلاتك. يمكنك تعطيلها من إعدادات المتصفح، ولكن قد يؤثر ذلك على بعض ميزات الموقع.
              </p>

              <p className="text-lg mt-12">
                نحن في هيما تاتش نحرص دائمًا على تقديم خدمة آمنة وشفافة، مع احترام كامل لخصوصيتكم.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;
