import React from 'react'
// import aframe from 'aframe'
// import styled from 'styled-components'
import stats from './stats.json'

const types = Object.keys(stats.inner)

function File ({ name, lines, x, y, z }) {
  return (
    <a-box
      color='tomato'
      depth='1'
      height={lines / 10}
      width='1'
      position={`${x} ${y} ${z}`}
    />
  )
}

function Type ({ name }) {
  const files = stats.inner[name].stats
  //   const [x, setX] = useState(0)
  //   const [y, setY] = useState(0)
  //   const [z, setZ] = useState(0)
  const margin = 1

  return (
    <React.Fragment>
      {files.map(({ name, lines }, index) => {
        if (index < 10) {
          return (
            <File
              key={name}
              name={name}
              lines={lines}
              x={index * 1}
              y={0}
              z={-4}
            />
          )
        }
      })}
    </React.Fragment>
  )
}

function Scene () {
  return (
    <div>
      <a-scene>
        <Type name='JavaScript' />
        <a-entity
          camera
          look-controls
          wasd-controls='acceleration:  200;  fly:  true'
        />
        {/* {types.map(name => (
          <Type key={name} name={name} />
        ))} */}
        <a-entity environment='preset: egypt' grid='crosses' />>
      </a-scene>
    </div>
  )
}

export default Scene
