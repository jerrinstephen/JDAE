const NestedDropdownHeader = (nestedsubviews) => {
  const nestedmenu = nestedsubviews.nestedsubviews.map((element, key) => (
    <li key={key}>
      <a href="#">{element.nestedviewname}</a>
    </li>
  ));
  return (
    <>
      <ul className="nestedContent yellow">{nestedmenu}</ul>
    </>
  );
};

export default NestedDropdownHeader;
