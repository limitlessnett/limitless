import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-forest-green text-pale-yellow py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="animate-slide-in-left">
            <div className="text-3xl font-bold text-lime-yellow mb-4 tracking-tighter hover-glow transition-smooth">
              Limitless Net
            </div>
            <p className="text-sm leading-relaxed opacity-80 mb-4">
              Ultra-fast fiber internet and cable services built for modern connectivity needs.
            </p>
            <a href="tel:888-809-0202" className="flex items-center gap-2 text-lime-yellow hover:text-pale-yellow transition-smooth font-bold hover-lift inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (888) 809-0202
            </a>
          </div>

          {/* Explore Plans */}
          <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-lime-yellow font-bold text-lg mb-4">Explore Plans</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pricing" className="hover:text-lime-yellow transition-smooth">
                  Home Fiber
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-lime-yellow transition-smooth">
                  Business Plans
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-lime-yellow transition-smooth">
                  Cable Bundles
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-lime-yellow transition-smooth">
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lime-yellow font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-lime-yellow transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-lime-yellow transition-smooth">
                  Coverage Map
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lime-yellow transition-smooth">
                  Support Center
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-lime-yellow transition-smooth">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-lime-yellow font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-lime-yellow transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-lime-yellow transition-smooth">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-lime-yellow transition-smooth">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lime-yellow transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-lime-yellow/20 pt-8 text-center">
          <p className="text-sm opacity-70 animate-fade-in">
            © {new Date().getFullYear()} Limitless Net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
