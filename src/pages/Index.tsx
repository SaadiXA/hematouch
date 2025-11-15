import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strategy from "@/components/Strategy";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Expertise from "@/components/Expertise";
import Ecosystem from "@/components/Ecosystem";
import Methodology from "@/components/Methodology";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Strategy />
        <About />
        <Problems />
        <Expertise />
        <Ecosystem />
        <Methodology />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
