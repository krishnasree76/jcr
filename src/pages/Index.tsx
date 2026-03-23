import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Clients from "@/components/Clients";
const Index = () => (
  <div className="font-sans selection:bg-brand-orange selection:text-brand-slate">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <WhyChooseUs />
    <Clients /> 
    <Contact />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
