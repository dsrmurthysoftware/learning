import React from 'react';

//Parent component
export default class ChildParentInvoke extends React.Component {
   constructor(props) {
      super(props);      
      this.state = {
         data: 'Initial data...'
      }
      //Best Practise
      this.updateState = this.updateState.bind(this);
   };
   // event handler in Parent
   updateState(e) {
      this.setState({data: e.target.value});   
      console.log(e.target.value)  
   }
   render() {
      return (
         <div>
           <h1 className='well text-success'>Parent component</h1>
           <h2 className='text-danger bg-success'>{this.state.data}</h2>
           <br/>
           <h2 className="container">Child Component</h2> <br/>
            <Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>         
         </div>
      );
   }
}
//Child Component
class Content extends React.Component {
   render() {
      return (
         <div>           
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>             
         </div>
      );
   }
}

