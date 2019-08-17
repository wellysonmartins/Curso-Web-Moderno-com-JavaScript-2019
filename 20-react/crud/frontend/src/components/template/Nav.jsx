import './Nav.css'
import React from 'react'
import NavItems from './NavIitems'

export default props =>
   <aside className="menu-area">
      <NavItems {...props} />
   </aside>