import React, { useEffect, useState } from 'react'

const App = () => {
  const [extensions, setExtensions] = useState([])

  useEffect(()=>{
    fetch("extensions.json")
    .then(response => response.json())
    .then(data => {
      const timeoutId = setTimeout(()=>{
        setExtensions(data)
      }, 2000)
      return () => clearTimeout(timeoutId)
    })
  },[])

  return (
    <div>

      { extensions.length == 0 ?
        <h1>Töltés...</h1>
        :
        extensions.map(extension => <h2>{extension.title} {extension.icon}</h2>)
      }

    </div>
  )
}

export default App