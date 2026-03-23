import { Linkedin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-brand-navy border-t border-brand-slate/10 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <img 
  src={logo} 
  alt="JCR Facility Logo" 
  className="h-16 w-auto mb-4" 
/>
          <p className="text-brand-slate/50 text-sm leading-relaxed">
            Reliable Workforce. Strong Infrastructure. Seamless Facilities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-brand-slate font-display font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
          <div className="space-y-3">
            {["About", "Services", "Why Us","Clients", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block text-brand-slate/50 text-sm hover:text-brand-orange transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-brand-slate font-display font-bold text-sm uppercase tracking-widest mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-brand-slate/50">
            <a href="tel:8309988784" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Phone size={14} /> 8309988784
            </a>
            <a href="mailto:contact@jcrgroups.org" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Mail size={14} /> contact@jcrgroups.org
            </a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-brand-slate font-display font-bold text-sm uppercase tracking-widest mb-4">Business Hours</h4>
          <p className="text-brand-slate/50 text-sm">Monday to Sunday</p>
          <p className="text-brand-slate/50 text-sm">9:30 AM – 6:00 PM</p>
        </div>
      </div>

      <div className="border-t border-brand-slate/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-brand-slate/30 text-sm">
          © {new Date().getFullYear()} JCR Facility, Manpower & Infrastructures LLP. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/company/jcr-facility-infrastructures-llp/about/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-slate/40 hover:text-brand-orange transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
