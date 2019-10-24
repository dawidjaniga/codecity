import React, { useState, useEffect } from 'react'
import { Frame } from 'arwes'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  pointer-events: none;
`

function FileName ({ children }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <Frame show animate level={3} corners={4} layer='primary'>
        <div style={{ padding: '20px 40px', fontSize: '20px' }}>{children}</div>
      </Frame>
    </div>
  )
}

function Hud ({ fileName }) {
  return (
    <Wrapper>
      <FileName>{fileName}</FileName>
    </Wrapper>
  )
}

export default Hud
