import React from "react";

const Footer = (props) => {
  return (
    <div className="footerData">
      <ul>
        {props.footerAddress.map((element) => (
          <p>{element}</p>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
