import React, { useEffect, useState } from 'react'
import ExtensionCard from './components/ExtensionCard'

const App = () => {
  const [extensions, setExtensions] = useState([])

  useEffect(()=>{
    fetch("extensions.json")
    .then(response => response.json())
    .then(data => {
      const timeoutId = setTimeout(()=>{
        setExtensions(data)
      }, 200)
      return () => clearTimeout(timeoutId)
    })
  },[])

  return (
    <div className='main'>

      { extensions.length == 0
        ?
        <h1>Töltés</h1>
        :
        extensions.map(extension => 
        <ExtensionCard key={extension.id} {...extension} />)
      }

    </div>
  )
}

export default App