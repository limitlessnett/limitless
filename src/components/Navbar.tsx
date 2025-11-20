import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-green/95 backdrop-blur-sm border-b border-lime-yellow/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-lime-yellow tracking-tighter">
              Limitless Net
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link to="/about" className="text-pale-yellow hover:text-lime-yellow transition-smooth font-medium">
              About
            </Link>
            <Link to="/services" className="text-pale-yellow hover:text-lime-yellow transition-smooth font-medium">
              Services
            </Link>
            <Link to="/pricing" className="text-pale-yellow hover:text-lime-yellow transition-smooth font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-pale-yellow hover:text-lime-yellow transition-smooth font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <a href="tel:888-809-0202">
              <Button variant="default" className="bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold">
                (888) 809-0202
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-lime-yellow"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="text-pale-yellow hover:text-lime-yellow transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-pale-yellow hover:text-lime-yellow transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-pale-yellow hover:text-lime-yellow transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-pale-yellow hover:text-lime-yellow transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a href="tel:888-809-0202" className="w-full">
                <Button variant="default" className="bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold w-full">
                  (888) 809-0202
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
