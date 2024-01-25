import "./contact.scss";
import { useState } from "react";
import { useSendEmail } from "../../hooks/useSendEmail";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

type ContactProps = {
  contactRef: React.RefObject<HTMLElement>;
};

const Contact = ({ contactRef }: ContactProps) => {
  const { mutate, isPending } = useSendEmail();
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    titleOfMessage: "",
    textOfMessage: "",
  });
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!messageData.name || !messageData.email || !messageData.titleOfMessage || !messageData.textOfMessage) {
      setShowError(true);
    } else {
      mutate(messageData);
      setMessageData({ name: "", email: "", titleOfMessage: "", textOfMessage: "" });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setShowError(false);
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" ref={contactRef}>
      <SectionHeader sectionName="Contact Me" sectionInfoText="// Got a question or problem to solve? Hit me up." />      
      {showError && <p className="contact__error">Error! Message was not send. Check if you fill all the fields.</p>}
      <form onSubmit={(e) => handleSubmit(e)} className="contact__form">
        <input disabled={isPending} name="name" type="text" placeholder="Your name" maxLength={30} value={messageData.name} onChange={(e) => handleFormChange(e)} autoComplete="off" />
        <input disabled={isPending} name="email" type="email" placeholder="Your email" value={messageData.email} onChange={(e) => handleFormChange(e)} />
        <input disabled={isPending} name="titleOfMessage" type="text" placeholder="Title of your message" maxLength={50} value={messageData.titleOfMessage} onChange={(e) => handleFormChange(e)} autoComplete="off" />
        <textarea disabled={isPending} name="textOfMessage" placeholder="Text of your message ..." value={messageData.textOfMessage} onChange={(e) => handleFormChange(e)} autoComplete="off"></textarea>
        <button type="submit" disabled={!messageData.name || !messageData.email || !messageData.titleOfMessage || !messageData.textOfMessage || isPending} className={!messageData.name || !messageData.email || !messageData.titleOfMessage || !messageData.textOfMessage || isPending ? "disabled" : ""}>
          {isPending && <LoadingSpinner />} SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
