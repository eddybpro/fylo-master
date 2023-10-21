import { useRef, useState } from "react";
import { Illustration2, ArrowIcon, QuotesIcon, Avatar } from "../assets";
import "./MainCard.css";

function MainCard() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const myRef = useRef();
  const emailRegex = /^[A-Z0-9._+%-]+@[A-Z0-9-.]+\.[A-Z]{2,}$/i;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    if (!emailRegex.test(email)) {
      setIsError(true);
      myRef.current.style.borderColor = "red";
    } else {
      setIsError(false);
      myRef.current.style.borderColor = "hsl(0, 0%, 75%)";
    }
  };
  return (
    <main>
      <div className="FirstCard">
        <div className="FirstCard-ImgBox">
          <img src={Illustration2} alt="illustration" />
        </div>
        <div className="FirstCard-TxtBox">
          <h1 className="FirstCard-TxtBox-Title">
            Stay productive, wherever you are
          </h1>
          <p className="FirstCard-TxtBox-Para">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. Securely share files
            and folders with friends, family and colleagues for live
            collaboration. No email attachments required!
          </p>
          <div className="FirstCard-TxtBox-LinkBox">
            <a href="#" className="FirstCard-TxtBox-LinkBox-Link">
              See how Fylo works
            </a>
            <img src={ArrowIcon} alt="" />
          </div>
          <div className="FirstCard-TxtBox-ReviewBox">
            <img src={QuotesIcon} alt="" />
            <p className="FirstCard-TxtBox-ReviewBox-Para">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="FirstCard-TxtBox-ReviewBox-UserBox">
              <img src={Avatar} alt="" />
              <div>
                <h2 className="FirstCard-TxtBox-ReviewBox-UserBox-Name">
                  kyle burton
                </h2>
                <p className="FirstCard-TxtBox-ReviewBox-UserBox-Job">
                  founder & CEO, huddle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SecondCard">
        <div>
          <h1 className="SecondCard-Title">Get early access today</h1>
          <p className="SecondCard-Para">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="SecondCard-Form">
          <label htmlFor="emaill">
            <input
              type="email"
              name="email"
              id="emaill"
              className="SecondCard-Form-Input"
              placeholder="email@example.com"
              aria-label="email"
              ref={myRef}
              value={email}
              onChange={handleChange}
            />
            {isError && <p className="errorPara">Please check your email</p>}
          </label>
          <button className="SecondCard-Form-Btn" onClick={handleClick}>
            Get Started For Free
          </button>
        </div>
      </div>
    </main>
  );
}
export default MainCard;
