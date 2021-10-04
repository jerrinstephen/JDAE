import "../../assets/scss/Header.scss";
import Logo from "../../assets/images/Logo.PNG";
import DropdownHeader from "./DropdownHeader";
import routes from "../../Header";
import React, { useState } from "react";

const Header = () => {
  const [activeElName, setActiveElName] = React.useState("");
  const [activeMenu, setActiveMenu] = React.useState(false);

  const toggleElName = (e, viewname) => {
    e.stopPropagation();
    if (activeElName !== viewname) setActiveElName(viewname);
    else setActiveElName("");
  };

  const enableMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const navmenu = routes.map((element, key) => (
    <li key={key} onClick={(e) => toggleElName(e, element.viewname)}>
      <a href="#">{element.viewname}</a>
      {element.subviews ? (
        <DropdownHeader
          subviews={element.subviews}
          show={element.viewname === activeElName ? "show" : "hide"}
        ></DropdownHeader>
      ) : (
        ""
      )}
    </li>
  ));

  return (
    <>
      <div className="container">
        <header>
          <div className="logoDiv blue">
            <h2>
              <a href="#">
                <img src={Logo} alt="logo" className="logo" />
              </a>
              JD ACADEMY OF EXCELLENCE
            </h2>
            <ul className="bilingualMenu"></ul>
          </div>
          <div className="yellow">
            <div className="SideNav" onClick={enableMenu}>
              <div className={"button "  + activeMenu}  id="btn">
                <div className="bar top"></div>
                <div className="bar middle"></div>
                <div className="bar bottom"></div>
              </div>
            </div>
            <ul className={"navMenu " + activeMenu}>{navmenu}</ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
