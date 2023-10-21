import { Logo, PhoneIcon, EmailIcon } from "../assets";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo" aria-label="fylo">
        <img src={Logo} alt="fylo" />
      </a>
      <div className="FooterWrapper">
        <address>
          <div>
            <img src={PhoneIcon} alt="" />
            <p>Phone: +1-543-123-4567 </p>
          </div>
          <div>
            <img src={EmailIcon} alt="" />
            <p>example@fylo.com</p>
          </div>
        </address>
        <ul>
          <li className="FooterWrapper-FooterLink">
            <a href="#">about us</a>
          </li>
          <li className="FooterWrapper-FooterLink">
            <a href="#">jobs</a>
          </li>
          <li className="FooterWrapper-FooterLink">
            <a href="#">press</a>
          </li>
          <li className="FooterWrapper-FooterLink">
            <a href="#">blog</a>
          </li>
        </ul>
        <ul>
          <li className="FooterWrapper-FooterLink">
            <a href="#">contact us</a>
          </li>
          <li className="FooterWrapper-FooterLink">
            <a href="#">terms</a>
          </li>
          <li className="FooterWrapper-FooterLink">
            <a href="#">privacy</a>
          </li>
        </ul>
        <ul className="FooterWrapper-SocialIconsBox">
          <li className="FooterWrapper-SocialIconsBox-FooterLink">
            <a href="#" aria-label="facebook">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaFacebookF />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="FooterWrapper-SocialIconsBox-FooterLink">
            <a href="#" aria-label="twitter">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaTwitter />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="FooterWrapper-SocialIconsBox-FooterLink">
            <a href="#" aria-label="instagram">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaInstagram />
                </div>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
