// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";

// const Contact = () => (
//   <section id="contact" className="py-24 bg-brand-navy overflow-hidden relative">
//     <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
//       <motion.div
//         initial={{ opacity: 0, x: -30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-slate mb-8 tracking-tighter">
//           Let's Build Together
//         </h2>

//         <div className="space-y-8 mb-12">
//           {[
//             {
//               icon: MapPin,
//               label: "Headquarters",
//               value: "#1-92-D-A-1, Opp TTD Kalyanmandapam, Nanjundewsari Complex, 1st Floor, Anantapur-515001, Andhra Pradesh",
//             },
//             { icon: Phone, label: "Call Us", value: "8309988784, 08554-351875" },
//             { icon: Mail, label: "Email", value: "contact@jcrgroups.org" },
//             { icon: Clock, label: "Business Hours", value: "Monday to Sunday: 9:30 AM – 6:00 PM" },
//           ].map(({ icon: Icon, label, value }) => (
//             <div key={label} className="flex gap-6">
//               <div className="w-12 h-12 bg-brand-slate/10 flex items-center justify-center shrink-0">
//                 <Icon className="text-brand-orange" size={20} />
//               </div>
//               <div>
//                 <p className="text-brand-slate/50 text-xs font-bold tracking-widest uppercase mb-1">{label}</p>
//                 <p className="text-brand-slate/90 text-sm leading-relaxed">{value}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Google Map */}
//         <div className="w-full h-48 bg-brand-slate/10 overflow-hidden">
//           <iframe
//             title="JCR Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.123456!2d77.5946!3d14.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQwJzU1LjIiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="bg-card p-10 shadow-2xl"
//       >
//         <h3 className="font-display text-2xl font-bold text-brand-navy mb-8">Send us a message</h3>
//         <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full border-b-2 border-muted p-3 focus:border-brand-orange outline-none text-foreground bg-transparent transition-colors"
//                 placeholder="John Doe"
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Email</label>
//               <input
//                 type="email"
//                 className="w-full border-b-2 border-muted p-3 focus:border-brand-orange outline-none text-foreground bg-transparent transition-colors"
//                 placeholder="john@company.com"
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Phone</label>
//             <input
//               type="tel"
//               className="w-full border-b-2 border-muted p-3 focus:border-brand-orange outline-none text-foreground bg-transparent transition-colors"
//               placeholder="+91 98765 43210"
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Message</label>
//             <textarea
//               rows={4}
//               className="w-full border-b-2 border-muted p-3 focus:border-brand-orange outline-none text-foreground bg-transparent transition-colors resize-none"
//               placeholder="How can we help you?"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-brand-orange text-brand-slate font-bold py-4 hover:bg-brand-navy transition-all duration-300 ease-brand shadow-lg shadow-brand-orange/20"
//           >
//             SEND INQUIRY
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   </section>
// );

// export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const text = `Hello, I have an inquiry:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/918309988784?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-brand-navy overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-slate mb-8 tracking-tighter">
            Let's Build Together
          </h2>

          <div className="space-y-8 mb-12">
            {[
              {
                icon: MapPin,
                label: "Headquarters",
                value:
                  "#1-92-D-A-1, Opp TTD Kalyanmandapam, Nanjundewsari Complex, 1st Floor, Anantapur-515001, Andhra Pradesh",
              },
              { icon: Phone, label: "Call Us", value: "8309988784, 08554-351875" },
              { icon: Mail, label: "Email", value: "contact@jcrgroups.org" },
              { icon: Clock, label: "Business Hours", value: "Monday to Sunday: 9:30 AM – 6:00 PM" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-6">
                <div className="w-12 h-12 bg-brand-slate/10 flex items-center justify-center shrink-0">
                  <Icon className="text-brand-orange" size={20} />
                </div>
                <div>
                  <p className="text-brand-slate/50 text-xs font-bold tracking-widest uppercase mb-1">
                    {label}
                  </p>
                  <p className="text-brand-slate/90 text-sm leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* GOOGLE MAP */}
          <div className="w-full h-48 bg-brand-slate/10 overflow-hidden">
            <iframe
              title="JCR Location"
              src="https://www.google.com/maps?q=14.6819,77.5946&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card p-10 shadow-2xl"
        >
          <h3 className="font-display text-2xl font-bold text-brand-navy mb-8">
            Send us a message
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-muted p-3 focus:border-brand-orange outline-none bg-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-muted p-3 focus:border-brand-orange outline-none bg-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-muted p-3 focus:border-brand-orange outline-none bg-transparent"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-muted p-3 focus:border-brand-orange outline-none bg-transparent resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-orange text-brand-slate font-bold py-4 hover:bg-brand-navy transition-all duration-300 shadow-lg"
            >
              SEND INQUIRY
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
