
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              TechFlow
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Pioneering the future of smart technology with innovative solutions 
              that enhance your daily life and work productivity.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-slate-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#specifications" className="hover:text-white transition-colors">Specifications</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@techflow.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 TechFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
