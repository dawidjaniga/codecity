import AFRAME from 'aframe'
import '../../libs/aframe-environment-component.min'
import 'aframe-teleport-controls'
import React, { useEffect } from 'react'
// import styled from 'styled-components'
import stats from './stats.json'

import tokeiStat from '../../static/tokei-example.json'

const types = Object.keys(stats.inner)
let handlers = {
  onFileClick: evt => {
    console.log('File Clicked: Empty handler', evt)
  }
}

const COLORS = {
  lighter: '#bfff00',
  normal: '#5abf28'
}

AFRAME.registerComponent('on-file-click', {
  init: function () {
    this.el.addEventListener('click', event => {
      handlers.onFileClick(event)
    })

    this.el.addEventListener('mouseenter', function () {
      this.setAttribute('material', 'color', COLORS.lighter)
    })

    this.el.addEventListener('mouseleave', function () {
      this.setAttribute('material', 'color', COLORS.normal)
    })
  }
})

function File({ name, lines, x, y, z }) {
  return (
    <a-box
      on-file-click
      color='#5abf28'
      depth='1'
      height={lines / 10}
      width='1'
      position={`${x} ${y} ${z}`}
      name={name}
    />
  )
}

function Dir({ name, x, y, z }) {
  // const files = stats.inner[name].stats
  //   const [x, setX] = useState(0)
  //   const [y, setY] = useState(0)
  //   const [z, setZ] = useState(0)
  const margin = 1
  let row = 0

  return <a-box
    on-file-click
    color='#5abf28'
    depth='1'
    height='1'
    width='1'
    position={`${x} ${y} ${z}`}
    name={name}
  />

  // return (
  //   <React.Fragment>
  //     {files.map(({ name, lines }, index) => {
  //       if (index < 20) {
  //         if (index % 10 === 0) {
  //           row += 3
  //         }

  //         return (
  //           <File
  //             key={name}
  //             name={name}
  //             lines={lines}
  //             x={index * 2 - 20}
  //             y={0}
  //             z={row}
  //           />
  //         )
  //       }
  //     })}
  //   </React.Fragment>
  // )
}

function Scene({ setFileName }) {
  useEffect(
    () => {
      handlers.onFileClick = event => {
        setFileName(event.target.getAttribute('name'))
      }
    },
    [handlers]
  )
  let x = 0
  let y = 1
  let z = 0

  return (
    <a-scene vr-mode-ui='enabled: true'>
      <a-camera
        wasd-controls='acceleration: 1000; fly: true'
        position='0 2 10'
      >
        <a-cursor
          cursor='fuse: true; fuseTimeout: 200'
          position='0 0 -1'
          geometry='primitive: ring; radiusInner: 0.025; radiusOuter: 0.03'
          material='color: #fff; shader: flat'
        />
      </a-camera>

      <a-entity environment='preset:goldmine;dressingColor:#5abf28;playArea:1.2;dressingAmount:0' />

      {tokeiStat.directories.map((dir, index) => <Dir name={dir} x={index * 2} y={y} z={z} />)}
    </a-scene>
  )
}

export default Scene
