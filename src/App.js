import React from 'react'
import styled from 'styled-components'
import Scene from './scene'
import Hud from './hud'

const SceneWrapper = styled.div`
  /* border: 10px solid lime; */
  background: red;
`

function App () {
  return (
    <div className='App'>
      <Hud />
      <SceneWrapper>
        <Scene />
      </SceneWrapper>
    </div>
  )
}

export default App
