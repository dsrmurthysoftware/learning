import React from 'react';
import {Link} from 'react-router-dom'

export const Menu = () => (
<div>
    <aside>
        <div >
            <Link to='/' >Home</Link>
            <Link to='/state'>State</Link>
            <Link to='/props'>Props and States</Link>
            <Link to='/intercomp'>Parent-Child talk</Link>
            <Link to='/refs'>Working with refs</Link>
            <Link to='/lifecycle'>Component Life Cycle</Link>
            <Link to='/rest'>REST calls </Link>
            <Link to='/hoc'>working with HOC</Link>
            <Link to="/login">Login Form</Link>
            <Link to ='/validation'>Form Validation</Link>
            <Link to ="/chart">Charts</Link>
            <Link to ='/shopping'>Shopping App Case study</Link>
            
    
            </div>
     </aside>
   </div> 
  )
  
