import React from 'react'
import{ Button } from 'antd'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'

function ButtonComp() {

  const ButtonContainer = styled.div`
        min-width: 40%;
        height: max-content;
        margin: 5px;
        padding: 4px;
        // border: 1px solid black;
        // border-radius: 5px;
    `

    const [{isDragging}, drag] = useDrag(()=>({
      type:"element",
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      })
     }))

  return (
    <ButtonContainer ref={drag}>
      <Button>Create</Button>
    </ButtonContainer>
  )
}

export default ButtonComp