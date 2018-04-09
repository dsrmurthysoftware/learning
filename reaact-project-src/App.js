import React, { Component } from 'react';
import '../css/style.css';
import {Menu} from './Menu'

import { BrowserRouter, Route,Switch,Redirect } from 'react-router-dom'

import HomePage from './start/Home'
import StateApp from './propsStates/StateApp'
import TextInput from './propsStates/TextInput'

//Intercomp
import ChildParentInvoke from './intercomp/ChildParentInvoke';
import UsingRefs from './intercomp/UsingRefs'

//Lifecycle
import CompLifeCycle from './lifecycle/CompLifeCycle'
import WeatherComponent from './lifecycle/WeatherComponent'

//HOC
import MyHOC from './HOC/HOC'

//Form
import Login from './Forms/Login'

//charts
import ChartApp from './charts/ChartApp'
import ShoppingApp from './shopping/ShoppingApp'
const products=[
  {id:2424,name:"Pendrive",price:23.45,rating:2},
  {id:4646,name:"Monitor",price:243.45,rating:3},
  {id:2784,name:"CPU",price:723.45,rating:4.5},
  {id:9820,name:"Mouse",price:283.45,rating:5}
  ];
export const App = () => (
  <div>
    <div className="menu">
        <Menu />
    </div>

    <main className="content">
        <Switch>
         
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/state' component={StateApp}/>
          <Route exact path='/props' component={TextInput}/> 
          <Route exact path='/intercomp' 
                  component={ChildParentInvoke}/>
          <Route exact path='/refs' component={UsingRefs}/>
          <Route exact path='/lifecycle' component={CompLifeCycle}/>
          <Route exact path='/rest' component={WeatherComponent} />
          <Route exact path="/hoc" component={MyHOC}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/chart' component={ChartApp}/>
         
          <Route path='/shopping' render={(props) => (
            <ShoppingApp {...props} products={products}/>
          )}/>
          
           <Redirect to="/" />

      </Switch>     
    </main>
     
  </div>
)
// <Route path="/products/:productId" component={ProductProfilePage} />
        
//    <div className="primary-content">
//      <UserProfile userId={props.match.params.userId} />
//     </div>

/*
import { Route, Redirect } from 'react-router'
 
<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/>
*/