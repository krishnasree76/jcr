import React from "react";
import sanghvi from "../assets/clients/sanghvi.png";
import incomeTax from "../assets/clients/income-tax.png";
import greenko from "../assets/clients/greenko.png";
import kvb from "../assets/clients/kvb.png";

const clients = [
  { name: "Sanghvi Movers", logo: sanghvi },
  { name: "Income Tax Department", logo: incomeTax },
  { name: "Greenko", logo: greenko },
  { name: "Karur Vysya Bank", logo: kvb },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Heading */}
        <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">
          Our Clients
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy tracking-tighter mb-6">
          Trusted By Leading Organizations
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
          We proudly serve government institutions and top corporate clients,
          delivering reliable manpower, facility, and security services.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-brand-navy/10 hover:shadow-lg transition duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;