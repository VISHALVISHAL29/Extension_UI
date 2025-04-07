import { useState } from 'react'
import electronLogo from './assets/Electron_Software_Framework_Logo.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <a href="https://www.electronjs.org" target="_blank">
          <img src={electronLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Extension Testing</h1>
        <h2>
         Hello user 👋
        </h2>
      <div className="card">
        <button onClick={() => window.location.reload()}>
          Reload 
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Electron logo to learn more
      </p>
    </>
  )
}

export default App
