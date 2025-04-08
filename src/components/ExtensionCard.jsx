import React from 'react'
import ToggleSwitch from './ToggleSwitch'

const ExtensionCard = (props) => {
  const {icon, title, description} = props

  return (
    <div className='extensionCard'>
      <div className='content'>
        <div className='emojiWrapper'>{icon}</div>
        <div className='textWrapper'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='buttonWrapper'>
        <button className="remove">Remove</button>
        <ToggleSwitch/>
      </div>
    </div>
  )
}

export default ExtensionCard