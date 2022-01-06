import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
// style={{ backgroundColor: navBg }};

const Navbar = () => {
  const location = useLocation();

  const [navBg, setNavBg] = React.useState("#ffdab9");
  const [navLinks, setLinks] = React.useState("#bb9770");

  useEffect(() => {
    if (location.pathname == "/Gallery") {
      setNavBg("#bada78");
      setLinks("#00a32a");
    } else if (location.pathname == "/Preorder") {
      setNavBg("#ffec5b");
      setLinks("#a96f2a");
    } else if (location.pathname == "/staff") {
      setNavBg("#ffc2b6");
      setLinks("#f86368");
    } else if (location.pathname == "/about") {
      setNavBg("#ffec5b");
      setLinks("#a96f2a");
    } else if (location.pathname == "/apply") {
      setNavBg("yellow");
      setLinks("#bb9770");
    } else if (location.pathname == "/donate") {
      setNavBg("#b6ccd7");
      setLinks("#47acb6");
    }
    else if (location.pathname == "/reviews") {
      setNavBg("#b6ccd7");
      setLinks("#47acb6");
    }
  }, [location]);

  // https://stackoverflow.com/questions/68407719/change-navbar-background-color-on-other-routes-in-reactjs

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: navBg,
        border: "1px solid",
        borderColor: navLinks,
      }}
    >
      <h2 className="NavbarAnhad" style={{ color: navLinks }}>
        ਅਨਹਦ
      </h2>

      <div className="links">
        <a href="/" style={{ color: navLinks }}>
          Home
        </a>
        <a href="/Gallery" style={{ color: navLinks }}>
          Gallery
        </a>
        <a href="/Preorder" style={{ color: navLinks }}>
          PreOrder
        </a>
        <a href="/staff" style={{ color: navLinks }}>
          Staff
        </a>
        <a href="/apply" style={{ color: navLinks }}>
          Apply
        </a>
        <a href="/reviews" style={{ color: navLinks }}>
          Reviews
        </a>
        <a href="/about" style={{ color: navLinks }}>
          About
        </a>
        <a href="/donate" style={{ color: navLinks }}>
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
