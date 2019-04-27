import React from "react";
import { Link } from "react-router-dom";

import Eccard from "../assets/EC_low.jpg";

export const EccardLogo = props => {
  const template = (
    <div
      className="eccard_logo"
      style={{
        width: props.width,
        height: props.height,
        backgroundImage: `url(${Eccard})`,
        backgroundSize: "contain"
      }}
    />
  );
  if (props.link) {
    return <Link to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
};
