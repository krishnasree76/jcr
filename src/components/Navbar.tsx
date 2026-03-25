
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["About", "Services", "Why Us", "Clients", "Contact"];
const Navbar = () => {
  const [open, setOpen] = useState(false);

 const handleScroll = (id) => {
  // 1. Find the element
  const section = document.getElementById(id);
  
  // 2. Close the mobile menu immediately
  setOpen(false);

  if (section) {
    // 3. Small delay to let the mobile keyboard or menu transition finish
    setTimeout(() => {
      const navHeight = 80; // Your navbar height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      // 4. Try the standard smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // 5. MOBILE FAILSAFE: If window.scrollTo is ignored by the browser, 
      // we force the documentElement (the literal HTML tag) to move.
      if (window.pageYOffset === 0 && offsetPosition !== 0) {
        document.documentElement.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  } else {
    console.error(`Missing section with id: ${id}`);
  }
};

  return (
    <nav className="fixed top-0 w-full z-[100] bg-card/80 backdrop-blur-md border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          onClick={() => handleScroll("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item.toLowerCase().replace(/\s+/g, "-"))}
              className="hover:text-brand-orange transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE - Added 'relative z-[110]' to ensure it's clickable */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden relative z-[110] text-foreground p-2"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-card border-b shadow-xl md:hidden pt-20 pb-10"
          >
            <div className="px-6 flex flex-col gap-6">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase().replace(/\s+/g, "-"))}
                  className="text-left text-xl font-semibold py-2 border-b border-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;