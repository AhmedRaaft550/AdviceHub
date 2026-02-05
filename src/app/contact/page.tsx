"use client";
import { motion } from "framer-motion";
import { CONTACT_METHODS } from "@/constants/contact";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-6 gap-16 items-center  ">
          {/* contact Heading ==> first section*/}
          <div className="col-span-6 text-center ">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Let’s{" "}
                <span className="headingGradient bg-clip-text text-transparent">
                  Connect.
                </span>
              </h2>
              <p className="text-gray-400 text-center text-lg mb-12 leading-relaxed ">
                Have a question or looking to join our expert network? Reach out
                and our team will get back to you within 24 hours.
              </p>
              {/* Contact Methods */}
              <div className="space-y-6 text-left">
                {CONTACT_METHODS.map((method) => (
                  <motion.div
                    key={method.id}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-4 rounded-2xl bg-white/ border border-white/5 hover:bg-white/5 transition-all group"
                  >
                    <div
                      className={`${method.bg} p-4 rounded-xl ${method.color} text-2xl`}
                    >
                      <method.icon />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                        {method.title}
                      </p>
                      <Link
                        href={
                          method.title === "Email Us"
                            ? `mailto:${method.value}`
                            : `tel:" + ${method.value}`
                        }
                        className="text-white font-medium"
                      >
                        {method.value}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* second section ==> contact form */}
          <div className="col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-white/3 backdrop-blur-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
