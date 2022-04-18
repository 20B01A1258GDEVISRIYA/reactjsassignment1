import React, {Component} from 'react';
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
componentDidMount(){
        this.timer = setInterval(
            () => this.setState({date: new Date()}),
            1000
        );
    }
componentWillUnmount(){
        clearInterval(this.timer);
    }
render(){
        return( 
            <div style={{
                backgroundImage:"linear-gradient(#427ceb, #1dad6f)",
                color:"black",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                height:"100vh",
                fontFamily:"cursive",
                fontSize:'100px'
              }}>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}
export default Clock;
