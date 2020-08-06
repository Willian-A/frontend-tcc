import React from "react";

import * as components from "./component";
import Button from "../../../atoms/button";

export default function CartResume(props) {
  return (
    <components.ResumeBox>
      <h2>Total</h2>
      <h2 className="value">R$ {props.value}</h2>
    </components.ResumeBox>
  );
}