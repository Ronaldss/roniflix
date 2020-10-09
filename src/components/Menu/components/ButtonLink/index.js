import React from "react";

function ButtonLink(props) {
  console.log(props);
  return (
    <a hfef={props.hfef} className={props.className}>
      {props.children}
    </a>
  );
}
export default ButtonLink;
