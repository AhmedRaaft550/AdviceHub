"use client";

import AnimatedBtn from "../customUi/AnimatedBtn";
import { FiMessageSquare, FiSend } from "react-icons/fi";
import { contactInputs } from "@/constants/contact-inputs";
import { ContactInputType } from "@/types/app";

const ContactForm = () => {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInputs.map((input: ContactInputType) => {
          // destructure icons
          const IconComponent = input.icon;
          return (
            <div key={input.id} className="space-y-2 group">
              <label className="text-sm font-medium text-gray-400 ml-2 group-focus-within:text-sky-500 transition-colors">
                {input.label}
              </label>
              <div className="relative">
                <IconComponent className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-sky-500" />

                <input
                  type={input.inputType}
                  placeholder={input.placeHolder}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-sky-500/50 focus:bg-sky-500/5 transition-all"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Message Input */}
      <div className="space-y-2 group">
        <label className="text-sm font-medium text-gray-400 ml-2 group-focus-within:text-sky-500 transition-colors">
          Your Message
        </label>
        <div className="relative">
          <FiMessageSquare className="absolute left-4 top-6 text-gray-500 group-focus-within:text-sky-500" />
          <textarea
            rows={5}
            placeholder="How can we help you?"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-sky-500/50 focus:bg-sky-500/5 transition-all resize-none"
          ></textarea>
        </div>
      </div>

      <AnimatedBtn className="w-full py-5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl text-lg flex items-center justify-center gap-3 shadow-xl shadow-sky-600/20 group transition-all">
        Send Message
        <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </AnimatedBtn>
    </form>
  );
};

export default ContactForm;
