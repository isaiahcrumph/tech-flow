
const Specifications = () => {
  const specs = [
    { label: "Dimensions", value: "12.5 x 8.3 x 0.6 inches" },
    { label: "Weight", value: "2.1 lbs (950g)" },
    { label: "Display", value: "15.6\" 4K OLED" },
    { label: "Processor", value: "Advanced AI Chip" },
    { label: "Memory", value: "16GB RAM, 512GB SSD" },
    { label: "Battery", value: "24-hour usage" },
    { label: "Connectivity", value: "Wi-Fi 6E, Bluetooth 5.3" },
    { label: "Warranty", value: "2 years international" }
  ];

  return (
    <section id="specifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-slate-600">
            Detailed specifications for the tech-savvy
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <span className="font-semibold text-slate-700">{spec.label}</span>
                <span className="text-slate-900 font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
