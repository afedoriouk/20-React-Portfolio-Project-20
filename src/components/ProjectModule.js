import React from 'react'

function ProjectModule({ image, name }) {
  return (
    <div classname="projectmodule">
      <div
        style={{ backgroundImage: `url({$image})` }}
        className="bacgroundImage"
      />
      <h1> {name}</h1>
    </div>
  )
}

export default ProjectModule
