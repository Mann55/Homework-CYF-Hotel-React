import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.footerAddress.map(element => (
        <p>{element}</p>
      ))}
    </ul>
  );
};

export default Footer;
