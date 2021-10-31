/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NestedDropdownHeader = (props) => {
  const nestedmenu = props.nestedsubviews.map((element, key) => (
    <li key={key}>
      <a href="#">{element.nestedviewname}</a>
    </li>
  ));
  return (
    <>
      <ul className={"nestedContent yellow " + props.show} >{nestedmenu}</ul>
    </>
  );
};

export default NestedDropdownHeader;
