/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../assets/scss/Header.scss";
import Logo from "../../assets/images/Logo.PNG";
import bilingual from "../../assets/images/bilingual.png";
import DropdownHeader from "./DropdownHeader";
import routes from "../../Header";
import React from "react";

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
    <li
      key={key}
      className="navmenuList"
      onClick={(e) => toggleElName(e, element.viewname)}
    >
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
              <div>
                <strong>JD ACADEMY OF EXCELLENCE</strong>
                <p>A Unit of Arcdiocese of Madras Mylapore</p>
              </div>
            </h2>
            <ul className="bilingualMenu ">
              <li>
                <a href="#">
                  <img src={bilingual} alt="logo" className="logo" />
                </a>
                <ul className>
                  <li>
                    <a href="#">தமிழ்</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="bg-header">
            <div className="SideNav" onClick={enableMenu}>
              <div className={"button " + activeMenu} id="btn">
                <div className="bar top"></div>
                <div className="bar middle"></div>
                <div className="bar bottom"></div>
              </div>
              <div><h4>Menu</h4></div>
            </div>
            <ul className={"navMenu " + activeMenu}>{navmenu}</ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
