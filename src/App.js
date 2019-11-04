import React, { useState } from 'react'
import styled from 'styled-components'
import Scene from './scene'
import Hud from './hud'

import {
  ThemeProvider,
  SoundsProvider,
  createSounds,
  createTheme,
  Arwes
} from 'arwes'

const myTheme = {
  color: {
    primary: {
      base: '#5abf28',
      dark: '#5abf28',
      light: '#5abf28'
    }
  }
}

class AppContainer extends React.Component { }

function App() {
  const [fileName, setFileName] = useState(
    '/Users/janiga/Documents/atelier/codecity/src/App.js'
  )

  return (
    <ThemeProvider theme={createTheme(myTheme)}>
      <Arwes>
        <Hud fileName={fileName} />
        <Scene setFileName={setFileName} />
      </Arwes>
    </ThemeProvider>
  )
}

export default App
