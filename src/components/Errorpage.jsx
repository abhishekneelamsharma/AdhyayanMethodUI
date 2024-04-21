import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Errorpage() {
  return (
    <>
    <div className="error-page d-flex align-items-center justify-content-center flex-column">
        <h2 className='d-flex align-items-center justify-content-center'>404</h2>
        <h3 className='text-center'>THE PAGE YOU ARE LOOKING FOR, IS NOT FOUND !</h3>
        <NavLink to={"/" } className={"btn btn-success mt-5"} >Go to the Home page</NavLink>
    </div>
    </>
  )
}
