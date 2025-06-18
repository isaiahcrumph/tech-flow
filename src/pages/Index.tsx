
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Specifications from "@/components/Specifications";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Specifications />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
