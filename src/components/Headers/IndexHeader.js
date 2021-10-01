import "../../assets/scss/Header.scss";
import Logo from "../../assets/images/Logo.PNG";
import DropdownHeader from "./DropdownHeader";
import routes from "../../Header";

const Header = () => {
  const navmenu = routes.map((element, key) => (
    <li key={key}>
      <a href="#">{element.viewname}</a>
      {element.subviews ? (
        <DropdownHeader subviews={element.subviews}></DropdownHeader>
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
            <ul className="navMenu">{navmenu}</ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
