
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            TechFlow
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#specifications" className="text-slate-700 hover:text-blue-600 transition-colors">
              Specs
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
          </nav>

          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            onClick={() => navigate('/checkout')}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
