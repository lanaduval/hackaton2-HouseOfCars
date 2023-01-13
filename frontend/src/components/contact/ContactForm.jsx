import { Player } from "@lottiefiles/react-lottie-player";
import { ToastContainer, Zoom, toast } from "react-toastify";
import mail from "../../assets/lottie/contact.json";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

function ContactForm() {
  const notif = () => {
    toast.success(
      <div>
        <p>Votre message a bien été envoyé</p>
      </div>,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      }
    );
  };

  return (
    <div className="containerContactForm">
      <Player autoplay loop src={mail} className="contactLottie" />
      <form onSubmit={notif}>
        <div className="input_contact">
          <h1>
            Contact <span id="italic">US</span>
          </h1>
        </div>
        <div>
          <input type="text" name="name" placeholder="Your name..." required />
        </div>
        <div>
          <input
            type="Your email"
            name="user_email"
            placeholder="exemple@gmail.com"
            required
          />
        </div>
        <div>
          <textarea name="message" placeholder="Message..." />
        </div>
      </form>
      <button
        type="submit"
        className="buttonSubmit"
        value="Send"
        onClick={() => {
          notif();
        }}
      >
        Send →
      </button>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
