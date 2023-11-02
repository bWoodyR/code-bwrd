import "./contact.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    titleOfMessage: "",
    textOfMessage: "",
  });
  const [showError, setShowError] = useState(false);
  const messageSendSuccess = () => toast.success("Message successfully send!");
  const messageSendError = () => toast.error("Unable to send message!");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!messageData.name || !messageData.email || !messageData.titleOfMessage || !messageData.textOfMessage) {
      setShowError(true);
      messageSendError();
    } else {
      messageSendSuccess();
      setMessageData({ name: "", email: "", titleOfMessage: "", textOfMessage: "" });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setShowError(false);
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <div className="contact__header">
        <h1 className="contact__header__title">Contact Me</h1>
        <p className="contact__header__infoText">// Got a question or problem to solve? Hit me up.</p>
      </div>
      {showError && <p className="contact__error">Error! Message was not send. Check if you fill all the fields.</p>}
      <form onSubmit={(e) => handleSubmit(e)} className="contact__form">
        <input name="name" type="text" placeholder="Your name" maxLength={30} value={messageData.name} onChange={(e) => handleFormChange(e)} autoComplete="off" />
        <input name="email" type="email" placeholder="Your email" value={messageData.email} onChange={(e) => handleFormChange(e)} />
        <input name="titleOfMessage" type="text" placeholder="Title of your message" maxLength={50} value={messageData.titleOfMessage} onChange={(e) => handleFormChange(e)} autoComplete="off" />
        <textarea name="textOfMessage" placeholder="Text of your message ..." value={messageData.textOfMessage} onChange={(e) => handleFormChange(e)} autoComplete="off"></textarea>
        <button type="submit" disabled={!messageData.name || !messageData.email || !messageData.titleOfMessage || !messageData.textOfMessage} className={!messageData.name || !messageData.email || !messageData.titleOfMessage || !messageData.textOfMessage ? "disabled" : ""}>
          SEND MESSAGE
        </button>
      </form>
      <ToastContainer theme="dark" pauseOnHover={false} draggable={false} hideProgressBar={true} autoClose={2500} position="bottom-left" />
    </div>
  );
};

export default Contact;
