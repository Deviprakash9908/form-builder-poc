import React from "react";
import {useDrag} from 'react-dnd';
import Elements from "./Elements";

function Nav() {
  const ElementList = [
    {
      id: "ele-text",
      name: "Text",
    },
    {
      id: "ele-button",
      name: "Button",
    }
  ]

  return (
    <div className="nav">
      {ElementList.map((element)=>{
        return <Elements id={element.id} name={element.name}/>
      })}
    </div>
  );
}

export default Nav;
