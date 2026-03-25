// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import heroBg from "@/assets/logo.png";

// const Hero = () => (
//   <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
//     {/* Background Image */}
//     <div className="absolute inset-0 z-0">
//    <div
//   className="w-full h-full bg-cover bg-center md:bg-right"
//   style={{ backgroundImage: `url(${heroBg})` }}
// />
//       <div className="absolute inset-0 bg-brand-navy/75" />
//     </div>

//     {/* Grid overlay */}
//     <div className="absolute inset-0 z-[1] opacity-10">
//       <div className="h-full w-full grid grid-cols-6 md:grid-cols-12">
//         {[...Array(12)].map((_, i) => (
//           <div key={i} className="border-r border-brand-slate/20 hidden md:block" />
//         ))}
//       </div>
//     </div>

//     <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
//         className="max-w-3xl"
//       >
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase mb-8">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
//           </span>
//           Industry Excellence
//         </div>

//         <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold text-brand-slate leading-[0.9] mb-6 tracking-tighter">
//           Reliable <span className="text-brand-orange">Workforce.</span>
//           <br />
//           Strong <span className="text-brand-orange">Infra.</span>
//         </h1>

//         <p className="text-lg text-brand-slate/70 max-w-lg mb-10 leading-relaxed">
//           Delivering professional manpower, facility management, and construction services tailored to modern business needs.
//         </p>

//         <div className="flex flex-wrap gap-4">
//           <a
//             href="#contact"
//             className="bg-brand-orange text-brand-slate px-8 py-4 font-bold flex items-center gap-2 group hover:bg-brand-teal transition-all duration-300 ease-brand"
//           >
//             GET A QUOTE
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//           </a>
//           <a
//             href="#services"
//             className="border-2 border-brand-slate/30 text-brand-slate px-8 py-4 font-bold hover:border-brand-orange hover:text-brand-orange transition-all duration-300 ease-brand"
//           >
//             EXPLORE SERVICES
//           </a>
//         </div>

//         {/* Stats row */}
//         <div className="mt-16 flex flex-wrap gap-12">
//           {[
//             { value: "15+", label: "Years of Service" },
//             { value: "500+", label: "Projects Delivered" },
//             { value: "1000+", label: "Skilled Workers" },
//           ].map((stat) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <p className="font-display text-4xl font-bold text-brand-orange">{stat.value}</p>
//               <p className="text-brand-slate/50 text-xs font-bold tracking-widest uppercase mt-1">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// export default Hero;
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/logo.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
  
  {/* Desktop Background Split */}
  <div className="absolute inset-0 z-0 hidden md:flex">
    {/* Left side */}
    <div className="w-1/2 bg-background" />

    {/* Right side image */}
    <div
      className="w-1/2 h-full bg-no-repeat bg-contain bg-right"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase mb-6">
        Industry Excellence
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-navy mb-6">
        Reliable <span className="text-brand-orange">Workforce.</span><br />
        Strong <span className="text-brand-orange">Infra.</span>
      </h1>

      <p className="text-muted-foreground mb-10">
        Delivering professional manpower, facility management, and construction services tailored to modern business needs.
      </p>

      <div className="flex gap-4">
        <a className="bg-brand-orange text-white px-6 py-3 flex items-center gap-2">
          GET A QUOTE
        </a>
      </div>
    </motion.div>

    {/* ✅ Mobile Image (only shows on small screens) */}
    <div className="mt-10 md:hidden flex justify-center">
      <img
        src={heroBg}
        alt="hero"
        className="w-[80%] h-auto object-contain"
      />
    </div>

    {/* Stats */}
    <div className="mt-16 flex flex-wrap gap-12">
      {[
        { value: "15+", label: "Years of Service" },
        { value: "500+", label: "Projects Delivered" },
        { value: "1000+", label: "Skilled Workers" },
      ].map((stat) => (
        <motion.div key={stat.label}>
          <p className="text-4xl font-bold text-brand-orange">{stat.value}</p>
          <p className="text-xs text-brand-navy/50 uppercase mt-1">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
);

export default Hero;