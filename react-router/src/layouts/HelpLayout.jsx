import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className='help-layout'>
      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores deleniti rem dolor! Iusto quos quisquam quae dicta sequi qui voluptates nostrum dolorum! Quas rerum ullam, tempore delectus fugit iste?</p>
      <nav>
        <NavLink to ="faq">view the faq</NavLink>
        <NavLink to ="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HelpLayout
