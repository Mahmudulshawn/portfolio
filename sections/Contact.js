import SectionHeader from "@/components/SectionHeader";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="mt-16 pb-12">
      <SectionHeader
        eyebrow={`Contact`}
        title={`Let's Connect`}
        description={`I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to chat, I'd love to hear from you.`}
      />
      <div className="flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
