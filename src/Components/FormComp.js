import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import styled from 'styled-components'
// import TextComp from './FormElements/TextComp';
// import ButtonComp from './FormElements/ButtonComp';

function FormComp() {

  const FormElement = styled.div`
    width: 70%;
    height: 100vh;
    margin-top: 20px;
    border: 1px solid black;
    background-color: white;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
  `;

  const [formElements, setFormElements] = useState([]);

  const [{isOver}, drop] = useDrop(()=>({
    accept: "element",
    drop: (ele) => addElementToForm(ele.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addElementToForm = (id) => {
    // console.log(id.split("-")[1]);
    let type = id.split("-")[1];
    let obj = {};
    switch(type){
      case "text":
        obj.id = "id"+Date.now().toString();
        obj.type = "text";
        obj.label = "Text";
        setFormElements([...formElements, obj])
        break;
    }
  }

  return (
    <FormElement ref={drop}>
      {formElements?.forEach((e)=>{
        console.log(formElements)
      })}
    </FormElement>
  )
}

export default FormComp