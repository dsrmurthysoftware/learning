import React, { Component } from 'react';
export default class AsyncAwait extends Component {
  
    constructor(){
        this.state = {response:''};
        this.callApi().then(res => this.setState({ 
            response: res.express 
        })).catch(err => console.log(err));
     }
     callApi = async  () => {
         const response = await fetch('https://randomuser.me/api/?results:100');
         const body = await response.json();
         if (response.status !== 200) 
               throw Error(body.message);
                return body;
            };
            render() {
                return (
                    <div className="App">
                    <p className="App intro">
                    {this.state.response}
                    </p>
                    </div>
                );
                  }
       
    }