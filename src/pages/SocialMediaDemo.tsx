
import { Button } from "@/components/ui/button";
import { ArrowLeft, Facebook, Instagram, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SocialMediaDemo = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <div className="text-white text-2xl font-bold">T</div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Demo Page</h1>
          <p className="text-slate-600 mb-6">
            This is a demonstration social media page. In a real application, 
            this would link to our actual social media profiles.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-4 p-4 bg-slate-50 rounded-xl">
            <Facebook className="w-6 h-6 text-blue-600" />
            <span className="text-slate-700">Facebook Demo</span>
          </div>
          <div className="flex items-center justify-center space-x-4 p-4 bg-slate-50 rounded-xl">
            <Instagram className="w-6 h-6 text-purple-600" />
            <span className="text-slate-700">Instagram Demo</span>
          </div>
          <div className="flex items-center justify-center space-x-4 p-4 bg-slate-50 rounded-xl">
            <Twitter className="w-6 h-6 text-blue-400" />
            <span className="text-slate-700">Twitter Demo</span>
          </div>
        </div>

        <Button 
          onClick={handleGoHome}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaDemo;
