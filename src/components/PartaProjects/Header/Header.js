import React, { useState, useEffect } from "react";
import { stateConst } from "../../Redux/State/StateConst/StateConst";
import Footer from "../Footer/Footer";
import "./Header.css";
import { Link, Events, animateScroll as scroll } from "react-scroll";
// import { stateConst } from "../../Redux/State/StateConst/StateConst";

const Header = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;
      const isVisible =
        currentScrollPos < prevScrollPos || currentScrollPos < 10;

      setHeaderVisibility(isVisible);
      prevScrollPos = currentScrollPos;
    };

    let prevScrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        opacity: isHeaderVisible ? 1 : 0,
      }}
      className="header">
      <img style={{ width: "100px" }} src={stateConst.images.logo} />
      <div>
        <div>
          {stateConst.scrollLinks.map((element) => {
            return (
              <Link
                className="link"
                to={element.to}
                spy={true}
                smooth={true}
                duration={500}>
                {element.text}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="wrap-sing">
        <h1>Sing in</h1>
        <button>OK</button>
      </div>
    </div>
  );
};

export default Header;

// backgroundColor: "white", // Добавьте цвет фона, если нужно
// zIndex: 1000, // Установите высокий z-index, чтобы Header был поверх других элементов
// boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Добавьте тень, если нужно
{
  /* <div className="links">
              <Link className="link" to="/home">
                Home
              </Link>
              <Link className="link" to="/seco">
                About Sec O
              </Link>
              <Link className="link" to="/sect">
                Vehicle Models Sec T
              </Link>
              <Link className="link" to="/asd">
                Testimonials
              </Link>
              <Link className="link" to="/asd">
                Our Team
              </Link>
              <Link className="link" to="/asd">
                Contact
              </Link>
            </div> */
}
{
  /* <Link
            className="link"
            to="home"
            spy={true}
            smooth={true}
            duration={500}>
            Home
          </Link>
          <Link
            className="link"
            to="selectionO"
            spy={true}
            smooth={true}
            duration={500}>
            About
          </Link>
          <Link
            className="link"
            to="selectionT"
            spy={true}
            smooth={true}
            duration={500}>
            Page 2
          </Link> */
}
