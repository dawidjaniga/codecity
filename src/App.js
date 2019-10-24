import React, { useState } from 'react'
import styled from 'styled-components'
import Scene from './scene'
import Hud from './hud'
import clickUrl from './sound/click.mp3'
import typingUrl from './sound/typing.mp3'
import deployUrl from './sound/deploy.mp3'

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

const mySounds = {
  shared: { volume: 1 }, // Shared sound settings
  players: {
    // The player settings
    click: {
      // With the name the player is created
      sound: { src: [new Audio(clickUrl)] } // The settings to pass to Howler
    },
    typing: {
      sound: { src: [new Audio(typingUrl)] },
      settings: { oneAtATime: true } // The custom app settings
    },
    deploy: {
      sound: { src: [new Audio(deployUrl)] },
      settings: { oneAtATime: true }
    }
  }
}

function App () {
  const [fileName, setFileName] = useState(
    '/Users/janiga/Documents/atelier/codecity/src/App.js'
  )

  return (
    <ThemeProvider theme={createTheme(myTheme)}>
      <SoundsProvider sounds={createSounds(mySounds)}>
        <Arwes>
          <Hud fileName={fileName} />
          <Scene setFileName={setFileName} />
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  )
}

export default App
