import React from 'react';
import Parent from './ErrorHandlling';

export default class CompLifeCycle extends React.Component {

   constructor(props) {
      super(props);		
      this.state = {
         data: 0,
         msg: 'Initial data...',
         newmsg:'Nodata'
      }
      this.setNewNumber = this.setNewNumber.bind(this)
      this.updateState = this.updateState.bind(this);     
   };
   setNewNumber(e) {
      this.setState({data: this.state.data + 1})
   }
   updateState(e) {
      this.setState({msg:e.target.value});
   }      
   render() {
      return (
         <div>
           <Parent/>
           <br/>
            <button  onClick = {this.setNewNumber}>INCREMENT</button>                       
            <Content myNumber = {this.state.data} ></Content>
            <br/>
             <input type = "text" value = {this.state.msg} 
               onChange = {this.updateState} />
             <h3>{this.state.msg}</h3>               
         </div>
      );
   }
}

//child comp
class Content extends React.Component {
  constructor(props){
    super(props);
    console.log(props.myNumber)
    console.log("1. Content Constructor fired")
    this.handleScroll = this.handleScroll.bind(this);
  }

  //The componentWillMount() method is invoked only once 
    //before initial rendering.
   //It is also a good place to set initial state value
   // inside componentWillMount().
   componentWillMount() {
      // load data from cache (Local storage or make ajax calls)
       console.log('componentWillMount => ' + this.props.myNumber);
   }

   // This  method will be invoked after rendering.    
   //It is the right place to access DOM of the component.
   handleScroll() {
    console.log("handle Scroll is executed");
}

componentDidMount() {
  console.log('Component DID MOUNT! - reset data or reintialize data ')
 console.log('componentDidMount => ' + this.props. myNumber);
 //DOM related activities we can do here
  window.addEventListener('scroll', this.handleScroll);    
}

//This method will be invoked when a component is receiving 
   //new props. componentWillReceiveProps() 
   //won't be called for the initial rendering.
   componentWillReceiveProps(nextProps) {    
      console.log('Component WILL RECIEVE PROPS! set default props here and validate props here')
      console.log("Props in Component will receive :"+
             nextProps.myNumber)
     //The old props can be accessed via this.props inside this. 
    //you can set state according to changes of props in this method.
    this.setState({
      isPassed: nextProps.myNumber >= 60
       });
    }

    //shouldComponentUpdate() will be invoked before rendering 
//when new props or state are being received.
// This method won't be called on initial rendering. (return true by default)
   shouldComponentUpdate(nextProps, nextState) {
      console.log("Decide whether to re-render or not ")
      console.log(nextState )
      // Don't rerender if score doesn't change, 
    if ( nextProps.myNumber == this.props.myNumber ) {
      console.log(" Component Not Rendered");
      return false;      
  }
    console.log(" Component is  Rendered");
     return true;  // change it to false to stop rendering     
   }

   //Invoked just before render(), but after shouldComponentUpdate()
// (of course, return a true).
//This method is not called for the initial rendering.

//Use this as an opportunity to prepare for an update.
   componentWillUpdate(nextProps, nextState) {
      //- check props & state before updating state
      console.log('Component WILL UPDATE! ' +nextProps.myNumber );
   }

   //Invoked immediately after the component's updates 
   //are flushed to the DOM. 
  //This method is not called for the initial rendering.
//You can perform DOM operations after an update inside this function.
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE! - you can rollback state here to previous state')
   }

   //This is invoked immediately before a component is unmounted or removed from the DOM.
  //Use this as an opportunity to perform cleanup operations.
  // For example, unbind event listeners here to avoid memory leaking.
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT! - release the resources here or cache data here')
      window.removeEventListener('scroll', this.handleScroll);
    }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>           
         </div>
      );
   }
}
