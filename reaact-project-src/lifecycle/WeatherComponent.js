import React from 'react';
class WeatherComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: "Sunny",
            pictures:[]
        };
    }
    //LifeCycle method 1
    componentWillMount(){
        console.log("inside componentWillMount method");
    }
    //LifeCycle method 2
    componentDidMount(){
        console.log("inside componentDidMount method");
        //REST Call 
        fetch('https://randomuser.me/api/?results:100')
        .then (results=> {
            return results.json();
        }).then (data =>{
            let pictures=data.results.map(pic => {
                return(
                    <div key={Math.random()}>
                      <img src={pic.picture.medium}/>
                    </div>
                )
            })
            this.setState({pictures:pictures});
            console.log("state",this.state.pictures) ;  
        })
    
    }
    //LifeCycle method 3
    componentWillReceiveProps(){
        console.log("inside componentWillReceiveProps method");
    }
    //LifeCycle method 4
    shouldComponentUpdate(){
        console.log("inside shouldComponentUpdate method");
        return true;
    }
    //LifeCycle method 5
    componentWillUpdate(){
        console.log("inside componentWillUpdate method");
    }
    //LifeCycle method 6
    componentDidUpdate(){
        console.log("inside componentDidUpdate method");
    }
    //LifeCycle method 7
    componentWillUnmount(){
        console.log("inside componentWillUnmount method");
    }

    changeName() {
        this.setState({weather:"Rainy"})
    }

    render() {
        console.log("inside render method");
        return (
            <div>
            
                <h1>Today Weather is : {this.state.weather}</h1>
                <button onClick={this.changeName.bind(this)}>
                    Change weather to Rainy
                </button>
                
                <span>
                    {this.state.pictures}
                </span>
            </div>
        );
    }
}

export default WeatherComponent;