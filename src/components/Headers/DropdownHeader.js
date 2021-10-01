import NestedDropdownHeader from "./NestedDropdownHeader";

const DropdownHeader = (subviews) => {
  const subnavmenu = subviews.subviews.map((element, key) => (
    <li key={key}>
      <a href="#">{element.subviewname}</a>
      {element.nestedsubviews ? (
        <NestedDropdownHeader
          nestedsubviews={element.nestedsubviews}
        ></NestedDropdownHeader>
      ) : (
        ""
      )}
    </li>
  ));
  return (
    <>
      <ul className="dropdownContent yellow">{subnavmenu}</ul>
    </>
  );
};

export default DropdownHeader;
