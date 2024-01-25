import "./contact.scss";
import { useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ContactForm from "../../components/ContactForm/ContactForm";

type ContactProps = {
  contactRef: React.RefObject<HTMLElement>;
};

const Contact = ({ contactRef }: ContactProps) => {
  const [showError, setShowError] = useState(false);

  return (
    <section className="contact" ref={contactRef}>
      <SectionHeader sectionName="Contact Me" sectionInfoText="// Got a question or problem to solve? Hit me up." />
      {showError && <p className="contact__error">Error! Message was not send. Check if you fill all the fields.</p>}
      <ContactForm setShowError={setShowError} />
    </section>
  );
};

export default Contact;
