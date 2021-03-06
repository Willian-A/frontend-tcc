import React, { useState } from "react";
/*import { navigate } from "hookrouter"*/ import * as component from "./component";
import { H4, H3 } from "../../../components/text";

function Filter(props) {
  const [open, setOpen] = useState(false);

  /*
  async function selectProducts(index) {
    navigate(`/produtos/${index}`);
  }*/

  return (
    <>
      <component.FilterBox
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <H3>{props.name}</H3>
        <component.FilterOptions open={open}>
          {props.options.map((name, index) => {
            return (
              <H4
                key={index}
                /*
                onClick={() => {
                  selectProducts(props.options[props.options.indexOf(name)]);
                }}*/
              >
                {name}
              </H4>
            );
          })}
        </component.FilterOptions>
      </component.FilterBox>
    </>
  );
}

export default Filter;
