import React, { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Server className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">Ubani Hosting</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => navigateToPage('/')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => navigateToPage('/about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => navigateToPage('/services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => navigateToPage('/contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => navigateToPage('/contact')}
              className="btn-primary"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => navigateToPage('/')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('/about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => navigateToPage('/services')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => navigateToPage('/contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => navigateToPage('/contact')}
                className="block w-full text-left px-3 py-2 btn-primary mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;