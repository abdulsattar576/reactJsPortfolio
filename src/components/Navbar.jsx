import { useEffect, useState } from 'react';

const Navbar = ({ setActiveSection, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setDrawerOpen(false);
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-gray-900/90 backdrop-blur-md' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-purple-400">A</span>S
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-2 py-1 text-lg ${activeSection === item.id ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"></span>
                  )}
                </button>
              ))}
            </div>
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${drawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Overlay with smooth transition */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${drawerOpen ? 'opacity-40' : 'opacity-0'}`}
          onClick={() => setDrawerOpen(false)}
        />
        
        {/* Drawer container with smooth slide animation */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer header with close button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="text-2xl font-bold">
              <span className="text-purple-400">A</span>S
            </div>
            <button
              className="p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          {/* Navigation items */}
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeSection === item.id ? 'bg-gray-800 text-purple-400' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
              >
                <div className="flex items-center">
                  {item.label}
                  {activeSection === item.id && (
                    <span className="ml-2 w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
            <p className="text-sm text-gray-400 text-center">© 2023 Sattar Devs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;