import SectionHeader from "@/components/SectionHeader";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="">
      <SectionHeader
        eyebrow={`Contact`}
        title={`Let's Connect`}
        description={`I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to chat, I'd love to hear from you.`}
      />
    </div>
  );
};

export default Contact;
