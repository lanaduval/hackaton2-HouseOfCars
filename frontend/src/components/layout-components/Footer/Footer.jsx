import "./Footer.css";
import twitter from "../../../assets/img/social/twitter.svg";
import facebook from "../../../assets/img/social/facebook.svg";
import instagram from "../../../assets/img/social/instagram.svg";

export default function Footer() {
  const twitterLink = "https://twitter.com/home";
  const facebookLink = "https://www.facebook.com/";
  const instagramLink = "https://www.instagram.com/";

  return (
    <footer>
      <p id="copyrigth">House of Cars</p>
      <div className="container-social">
        <a href={twitterLink} target="twitter icon social">
          <img src={twitter} alt="twitter" className="social" />
        </a>
        <a href={facebookLink} target="facebook icon social">
          <img src={facebook} alt="twitter" className="social" />
        </a>
        <a href={instagramLink} target="instagram icon social">
          <img src={instagram} alt="twitter" className="social" />
        </a>
      </div>
    </footer>
  );
}
