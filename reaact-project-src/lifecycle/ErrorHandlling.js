import React from 'react';
class Child extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ error: true });
    }
    
    render() {
        if (this.state.error) {
            throw new Error('OOPS! I am crashed!');
        }
        return <button onClick = { this.handleClick }>Click to raise error</button>;
    }
}

export default class Parent extends React.Component {
   constructor(props) {
        super(props);

        this.state = {
            errorInChild: false
        };
   }

    componentDidCatch() {
        this.setState({ errorInChild: true });
    }
    
    render() {
        return this.state.errorInChild ? 
        <div>Error</div> : <Child />;
    }
}