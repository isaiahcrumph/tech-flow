
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white p-12 rounded-2xl shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Order Complete!
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            Thank you for your purchase! Your order has been successfully processed.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-800">Order Summary</h2>
            </div>
            
            <div className="flex items-center gap-4 justify-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop"
                alt="SmartDevice Pro"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="text-left">
                <h3 className="font-semibold text-slate-800">SmartDevice Pro</h3>
                <p className="text-slate-600">Quantity: 1</p>
                <p className="font-bold text-lg text-slate-800">$299.00</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-500">
              A confirmation email has been sent to your email address.
            </p>
          </div>

          <Button 
            size="lg" 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
