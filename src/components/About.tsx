import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => (
  <section id="about" className="py-24 bg-card">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tighter">
            Building Trust Through Quality & Reliability
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            JCR Facility, Manpower & Infrastructures LLP delivers professional manpower, facility management, and construction services tailored to modern business needs. We focus on quality, reliability, and seamless operations to help businesses thrive.
          </p>

          <div className="space-y-4">
            {[
              "Professional & trained workforce deployment",
              "End-to-end facility management solutions",
              "Timely project delivery with quality assurance",
              "Compliant with all industry regulations",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-teal mt-0.5 shrink-0" size={20} />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-brand-navy p-8 text-brand-slate">
            <p className="font-display text-3xl font-bold text-brand-orange mb-2">Mission</p>
            <p className="text-brand-slate/70 text-sm leading-relaxed">
              To deliver reliable, high-quality workforce and infrastructure solutions that empower businesses to operate seamlessly.
            </p>
          </div>
          <div className="bg-brand-teal p-8 text-brand-slate mt-8">
            <p className="font-display text-3xl font-bold text-brand-orange mb-2">Vision</p>
            <p className="text-brand-slate/70 text-sm leading-relaxed">
              To be India's most trusted partner for facility management, manpower, and infrastructure services.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
