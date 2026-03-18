// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Menu, X } from "lucide-react";
// // import logo from "@/assets/logo.png";

// // const navLinks = ["About", "Services", "Why Us", "Contact"];

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-brand-navy/10">
// //       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
// //         <a href="#" className="flex items-center gap-3">
// //           <img src={logo} alt="JCR Facility Logo" className="h-14 w-auto" />
// //         </a>

// //         <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
// //           {navLinks.map((item) => (
// //             <a
// //               key={item}
// //               href={`#${item.toLowerCase().replace(" ", "-")}`}
// //               className="hover:text-brand-orange transition-colors duration-300"
// //             >
// //               {item}
// //             </a>
// //           ))}
// //         </div>

// //         <a
// //           href="#contact"
// //           className="hidden md:inline-block bg-brand-navy text-brand-slate px-6 py-2.5 text-sm font-bold hover:bg-brand-orange transition-all duration-300 ease-brand"
// //         >
// //           GET A QUOTE
// //         </a>

// //         <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
// //           {open ? <X size={24} /> : <Menu size={24} />}
// //         </button>
// //       </div>

// //       <AnimatePresence>
// //         {open && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             className="md:hidden bg-card border-b border-brand-navy/10 overflow-hidden"
// //           >
// //             <div className="px-6 py-4 flex flex-col gap-4">
// //               {navLinks.map((item) => (
// //                 <a
// //                   key={item}
// //                   href={`#${item.toLowerCase().replace(" ", "-")}`}
// //                   onClick={() => setOpen(false)}
// //                   className="text-foreground/70 hover:text-brand-orange transition-colors py-2"
// //                 >
// //                   {item}
// //                 </a>
// //               ))}
// //               <a
// //                 href="#contact"
// //                 onClick={() => setOpen(false)}
// //                 className="bg-brand-navy text-brand-slate px-6 py-3 text-sm font-bold text-center hover:bg-brand-orange transition-all"
// //               >
// //                 GET A QUOTE
// //               </a>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/logo.png";

// const navLinks = ["About", "Services", "Why Us", "Contact"];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   // 🔥 Smooth scroll function
//   const handleScroll = (id) => {
//   const section = document.getElementById(id);

//   if (section) {
//     const yOffset = -80; // height of navbar (h-20 = 80px)
//     const y =
//       section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });

//     setOpen(false);
//   }
// };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-brand-navy/10">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
//         {/* LOGO */}
//         <div
//           onClick={() => handleScroll("home")}
//           className="flex items-center gap-3 cursor-pointer"
//         >
//           <img src={logo} alt="JCR Facility Logo" className="h-14 w-auto" />
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
//           {navLinks.map((item) => {
//             const id = item.toLowerCase().replace(" ", "-");
//             return (
//               <button
//                 key={item}
//                 onClick={() => handleScroll(id)}
//                 className="hover:text-brand-orange transition-colors duration-300"
//               >
//                 {item}
//               </button>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <button
//           onClick={() => handleScroll("contact")}
//           className="hidden md:inline-block bg-brand-navy text-brand-slate px-6 py-2.5 text-sm font-bold hover:bg-brand-orange transition-all duration-300"
//         >
//           GET A QUOTE
//         </button>

//         {/* MOBILE MENU BUTTON */}
//         <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="md:hidden bg-card border-b border-brand-navy/10 overflow-hidden"
//           >
//             <div className="px-6 py-4 flex flex-col gap-4">
//               {navLinks.map((item) => {
//                 const id = item.toLowerCase().replace(" ", "-");
//                 return (
//                   <button
//                     key={item}
//                     onClick={() => handleScroll(id)}
//                     className="text-left text-foreground/70 hover:text-brand-orange transition-colors py-2"
//                   >
//                     {item}
//                   </button>
//                 );
//               })}

//               <button
//                 onClick={() => handleScroll("contact")}
//                 className="bg-brand-navy text-brand-slate px-6 py-3 text-sm font-bold text-center hover:bg-brand-orange transition-all"
//               >
//                 GET A QUOTE
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["About", "Services", "Why Us", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 🔥 Robust Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      // Close menu immediately for better UX on mobile
      setOpen(false);

      const yOffset = -80; // height of navbar
      const rect = section.getBoundingClientRect();
      // Use window.scrollY as it's more modern than pageYOffset
      const y = rect.top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
      console.warn(`Section with id "${id}" not found.`);
    }
  };

  // Helper to format ID (e.g., "Why Us" -> "why-us")
  const formatId = (item) => item.toLowerCase().replace(/\s+/g, "-");

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          onClick={() => handleScroll("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="JCR Facility Logo" className="h-14 w-auto" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(formatId(item))}
              className="hover:text-brand-orange transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:inline-block bg-brand-navy text-brand-slate px-6 py-2.5 text-sm font-bold hover:bg-brand-orange transition-all duration-300"
        >
          GET A QUOTE
        </button>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-foreground p-2"
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-card border-b border-brand-navy/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(formatId(item))}
                  className="text-left text-lg font-medium text-foreground/70 hover:text-brand-orange transition-colors py-2"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => handleScroll("contact")}
                className="mt-2 bg-brand-navy text-brand-slate px-6 py-4 text-sm font-bold text-center hover:bg-brand-orange transition-all"
              >
                GET A QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;