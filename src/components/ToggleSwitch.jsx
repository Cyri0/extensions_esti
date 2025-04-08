import React, { useState } from 'react'

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div 
        className='switch'
        onClick={()=>setIsOn(!isOn)}>
        <div className={isOn && 'off'}></div>
    </div>
  )
}

export default ToggleSwitch