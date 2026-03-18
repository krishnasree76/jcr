import { motion } from "framer-motion";
import { Users, Building2, HardHat, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, desc, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
    whileHover={{ y: -10 }}
    className="bg-card p-10 border border-brand-navy/5 shadow-sm hover:shadow-xl transition-all duration-300 group"
  >
    <div className="w-14 h-14 bg-background flex items-center justify-center mb-8 group-hover:bg-brand-navy transition-colors duration-300">
      <Icon className="text-brand-navy group-hover:text-brand-slate transition-colors duration-300" size={28} />
    </div>
    <p className="text-brand-orange font-display font-bold text-sm mb-2">0{index + 1}</p>
    <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
    <a
      href="#contact"
      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-navy hover:text-brand-orange transition-colors"
    >
      LEARN MORE <ArrowRight size={14} />
    </a>
  </motion.div>
);

const services = [
  {
    icon: Users,
    title: "Manpower Services",
    desc: "Skilled, semi-skilled, and professional staffing solutions tailored to your operational scale and industry requirements.",
  },
  {
    icon: Building2,
    title: "Facility Management",
    desc: "Comprehensive upkeep, maintenance, and operational management for corporate and industrial spaces.",
  },
  {
    icon: HardHat,
    title: "Construction Services",
    desc: "End-to-end infrastructure development with a focus on structural integrity, safety, and timely delivery.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4 tracking-tighter">
            Core Capabilities
          </h2>
          <p className="text-muted-foreground">
            We provide the backbone for modern business operations through specialized service verticals.
          </p>
        </div>
        <div className="h-px flex-1 bg-brand-navy/10 mx-12 hidden md:block mb-4" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
