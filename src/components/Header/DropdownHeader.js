import NestedDropdownHeader from "./NestedDropdownHeader";
import React from "react";
import hovermenu from "../../assets/images/hovermenu.png";
import hovermenuactive from "../../assets/images/hovermenuactive.png";

const DropdownHeader = (props) => {
  const [activeElName, setActiveElName] = React.useState("");

  const toggleElName = (e,viewname) => {
    e.stopPropagation()
    if (activeElName !== viewname) setActiveElName(viewname);
    else setActiveElName("");
  };

  const subnavmenu = props.subviews.map((element, key) => (
    <li key={key} onClick={(e) => toggleElName(e,element.subviewname)}>
      <a href="#">{element.subviewname}{element.nestedsubviews ? (<><img src={hovermenu} alt='hovermenu' className='hovermenu'/> <img src={hovermenuactive} alt='hovermenuactive' className='hovermenuactive'/></>) : ''}</a>
      {element.nestedsubviews ? (
        <NestedDropdownHeader
          nestedsubviews={element.nestedsubviews}
          show={element.subviewname === activeElName ? "show" : "hide"}
        ></NestedDropdownHeader>
      ) : (
        ""
      )}
    </li>
  ));
  return (
    <>
      <ul className={"dropdownContent yellow " + props.show}>{subnavmenu}</ul>
    </>
  );
};

export default DropdownHeader;
