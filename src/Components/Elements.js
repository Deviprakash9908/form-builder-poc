import React from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd';

function Elements({id, name}) {

  const ElementsCard = styled.div`
    width: 70px;
    height: 20px;
    border: 1px solid black;
    text-align: center;
    border-radius: 3px;
    margin: 2px;
    background-color: white;
    cursor: pointer;
  `;

  const [{isDragging}, drag] = useDrag(()=>({
    type:"element",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
   }))

  return (
    <ElementsCard
      ref={drag}
    >
      {name}
    </ElementsCard>
  )
}

export default Elements