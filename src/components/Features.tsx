
import { Star, Heart, Search } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Crafted with the finest materials and cutting-edge technology for unmatched durability."
    },
    {
      icon: Heart,
      title: "User-Friendly",
      description: "Intuitive design that makes complex tasks simple and enjoyable for everyone."
    },
    {
      icon: Search,
      title: "Smart Intelligence",
      description: "AI-powered features that learn and adapt to your preferences automatically."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Choose SmartDevice Pro?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the perfect blend of innovation, performance, and elegance 
            that sets new standards in the industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
