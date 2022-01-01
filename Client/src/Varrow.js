import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "./styles/varrow.css";
import { useHistory } from "react-router-dom";

const Varrow = (pathgiven) => {
  console.log(pathgiven);
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
      setNavBg("#ffdab9");
      setLinks("#bb9770");
    } else if (location.pathname == "/contact") {
      setNavBg("yellow");
      setLinks("#bb9770");
    } else if (location.pathname == "/donate") {
      setNavBg("yellow");
      setLinks("#bb9770");
    }
  }, [location]);

  const history = useHistory();

  const routeChange = () => {
    let path = pathgiven.newpage;
    history.push(path);
  };

  return (
    <div
      className="arrowDiv"
      onClick={routeChange}
      style={{ backgroundColor: navBg }}
    >
      <div className="arrow" style={{ color: navLinks }}>
        ╲╱
      </div>
    </div>
  );
};

export default Varrow;
