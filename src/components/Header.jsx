import { useRef, useState } from "react";
import { Illustration1 } from "../assets";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const myRef = useRef();

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    if (!emailRegex.test(email)) {
      setIsError(true);
      myRef.current.style.borderColor = "red";
    } else {
      setIsError(false);
      myRef.current.style.borderColor = "hsl(238, 22%, 44%)";
    }
  };
  return (
    <header>
      <Navbar />
      <div className="HeaderWrapper">
        <div className="HeaderWrapper-ImgBox">
          <img src={Illustration1} alt="illustration" />
        </div>
        <div className="HeaderWrapper-TxtBox">
          <h1 className="HeaderWrapper-TxtBox-Title">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="HeaderWrapper-TxtBox-Para">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className="HeaderWrapper-TxtBox-Form">
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                className="HeaderWrapper-TxtBox-Form-Input"
                aria-label="email"
                placeholder="Enter your email"
                required
                ref={myRef}
                value={email}
                onChange={handleChange}
              />
              {isError && <p className="error">Please check your email</p>}
            </label>
            <button
              className="HeaderWrapper-TxtBox-Form-Btn"
              onClick={handleClick}
            >
              get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
