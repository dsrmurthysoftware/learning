


import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

  import {App} from './App';
  
  ReactDOM.render((
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('app'))
  

/*
import App from './App';
const company="Sapient Private Limited";

ReactDOM.render(<App company={company} />, 
                    document.getElementById('app'));

*/


/*
//Shopping case study
import App from './shopping/App'
import '../css/style.css';

const products=[
    {id:2424,name:"Pendrive",price:23.45,rating:2},
    {id:4646,name:"Monitor",price:243.45,rating:3},
    {id:2784,name:"CPU",price:723.45,rating:4.5},
    {id:9820,name:"Mouse",price:283.45,rating:5}
    ];
    
ReactDOM.render(<App products={products}/>, 
                           document.getElementById('app'));
*/