import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const App = () => {
  return (
    <div>
        <h1>Form</h1>
        <ul>
            <li><Link to="/form" id="form-link">Form Link</Link></li>
            <li><Link to="/form-ref" id="form-ref-link">Form Ref Link</Link></li>
            <li><Link to="/form-state" id="form-state-link">Form State Link</Link></li>
        </ul>
        <Card />
    </div>
  )
}

export default App