import { motion } from "framer-motion";

const items = [
  { label: "Trust", desc: "Built on years of consistent, dependable delivery to clients across industries." },
  { label: "Quality", desc: "Uncompromising standards in every task, backed by rigorous quality checks." },
  { label: "Skilled", desc: "A workforce trained for modern challenges and equipped with the right tools." },
  { label: "Timely", desc: "Operations that respect your schedule with on-time project completion." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">Why Choose Us</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy tracking-tighter">
          The JCR Advantage
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-l-2 border-brand-orange pl-6 py-2"
          >
            <h4 className="font-display font-bold text-xl text-brand-navy mb-2">{item.label}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
