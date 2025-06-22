import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-slate-300">
            Get your SmartDevice Pro today with our exclusive launch offer
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
              Limited Time
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">SmartDevice Pro</h3>
              
              <div className="mb-6">
                <span className="text-5xl font-bold">$299</span>
                <span className="text-slate-500 line-through ml-2 text-xl">$399</span>
              </div>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>Premium build quality</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>AI-powered intelligence</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>24-hour battery life</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>2-year warranty included</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>Free shipping worldwide</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 text-lg"
                onClick={() => navigate('/checkout')}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Order Now - Save $100
              </Button>
              
              <p className="text-sm text-slate-500 mt-4">
                30-day money-back guarantee • Secure checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
