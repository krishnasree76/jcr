import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["About", "Services", "Why Us", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="JCR Facility Logo" className="h-14 w-auto" />
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-brand-orange transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-brand-navy text-brand-slate px-6 py-2.5 text-sm font-bold hover:bg-brand-orange transition-all duration-300 ease-brand"
        >
          GET A QUOTE
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-brand-navy/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpen(false)}
                  className="text-foreground/70 hover:text-brand-orange transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-brand-navy text-brand-slate px-6 py-3 text-sm font-bold text-center hover:bg-brand-orange transition-all"
              >
                GET A QUOTE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
