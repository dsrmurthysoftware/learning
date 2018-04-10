import React from 'react';
import {Route ,Link,Switch} from 'react-router-dom'

import {Home} from './Home'
import {Customers} from './Customers'
import {Greet} from './Greet'
import {Login} from './Login'
import Cars from './Cars'

//passing params
const extraProps = { name: 'Murthy' }

export const Layout = () => (
  
  <div>
    <span >
    <Link className="nav"  exact to='/'>Home</Link>
    <Link className="nav"  exact to='/users'>Customers</Link>
    <Link className="nav"  exact to='/cars'>Cars</Link>
      <Link className="nav"  exact to='/login'>Login</Link>
     <Link className="nav" exact to="/greet/Murthy">Greet</Link>
      </span>

    <main className="container">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Customers}  />
      <Route path="/login" component={Login} />
      <Route path="/cars" component={Cars} />
    
      <Route path='/greet/:username' 
            render={(props) => (<Greet {...props} username={extraProps}/>)}/>

      <Route component={NotFound}/>
     </Switch>
      </main>
  </div>
)

const NotFound= () => <div>Sorry... there no matching route</div>


