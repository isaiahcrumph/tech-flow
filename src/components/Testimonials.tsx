
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Professional",
      content: "This device has completely transformed my workflow. The quality and performance are exceptional!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Designer",
      content: "Absolutely love the sleek design and smart features. Worth every penny!",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Business Owner",
      content: "Outstanding build quality and customer service. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600">
            Join thousands of satisfied customers worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-slate-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
