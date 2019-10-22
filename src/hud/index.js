import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
`

const FileName = styled.div`
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
`

function Hud () {
  const [currentFileName, setCurrentFileName] = useState(
    '/Users/janiga/Documents/atelier/codecity/src/App.js'
  )

  return (
    <Wrapper>
      <FileName>{currentFileName}</FileName>
    </Wrapper>
  )
}

export default Hud
