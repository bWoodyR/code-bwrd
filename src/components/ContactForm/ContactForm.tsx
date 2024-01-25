import "./contactForm.scss";
import { useSendEmail } from "../../hooks/useSendEmail";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";

type ContactFormProps = {
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactForm = ({ setShowError }: ContactFormProps) => {
  const { mutate, isPending } = useSendEmail();
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    titleOfMessage: "",
    textOfMessage: "",
  });

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
    <form onSubmit={(e) => handleSubmit(e)} className="contactForm">
      <input className="contactForm__input" disabled={isPending} name="name" type="text" placeholder="Your name" maxLength={30} value={messageData.name} onChange={(e) => handleFormChange(e)} autoComplete="off" />
      <input className="contactForm__input" disabled={isPending} name="email" type="email" placeholder="Your email" value={messageData.email} onChange={(e) => handleFormChange(e)} />
      <input className="contactForm__input" disabled={isPending} name="titleOfMessage" type="text" placeholder="Title of your message" maxLength={50} value={messageData.titleOfMessage} onChange={(e) => handleFormChange(e)} autoComplete="off" />
      <textarea className="contactForm__textarea" disabled={isPending} name="textOfMessage" placeholder="Text of your message ..." value={messageData.textOfMessage} onChange={(e) => handleFormChange(e)} autoComplete="off"></textarea>
      <button
        type="submit"
        disabled={!messageData.name || !messageData.email || !messageData.titleOfMessage || !messageData.textOfMessage || isPending}
        className={`contactForm__btn-submit ${!messageData.name || !messageData.email || !messageData.titleOfMessage || !messageData.textOfMessage || isPending ? "disabled" : ""}`}
      >
        {isPending && <LoadingSpinner />} SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
