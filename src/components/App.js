import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const App = () => {
  return (
    <div>
        <h1>Form</h1>
        <ul>
            <li><Link to="/form-link" id="form-link">Form Link</Link></li>
            <li><Link to="/form-ref-link" id="form-link">Form Ref Link</Link></li>
            <li><Link to="/form-state-link" id="form-link">Form State Link</Link></li>
        </ul>
        <Card />
    </div>
  )
}

export default App