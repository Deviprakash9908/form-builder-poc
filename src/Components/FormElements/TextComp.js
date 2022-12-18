import React from 'react'
import {Input} from 'antd'
import styled from 'styled-components'

function TextComp() {

    const TextContainer = styled.div`
        min-width: 40%;
        height: max-content;
        margin: 5px;
        padding: 4px;
        // border: 1px solid black;
        // border-radius: 5px;
    `

  return (
    <TextContainer>
        <label>Text</label>
        <Input placeholder='basic input'></Input>
    </TextContainer>
  )
}

export default TextComp