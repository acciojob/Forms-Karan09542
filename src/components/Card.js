import React from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'

const Card = () => {
  const {pathname} = useLocation();
    const path = pathname.split("/").at(-1);


  const getSectionIndex = () => {
    if(!path) return "";
    if (path === "form") {
      return 1;
    }
    if (path === "form-ref") {
      return 2;
    }
    if (path === "form-state") {
      return 3;
    }
    return "";
  }
  return (
    <div className='style-card'>
        <h2>Section {getSectionIndex()}</h2>
        <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/form-ref" element={<FormRef />} />
            <Route path="/form-state" element={<FormState />} />
        </Routes>
    </div>
  )
}

export default Card