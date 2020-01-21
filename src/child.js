import React, {Component} from 'react';

class Child extends Component{
    constructor(props){
        super(props);
        this.state ={
            val:0
        }
}
loadText = (e) =>{
var text = e.target.value;
this.setState({val:text})
this.sentToParent(text);
}

sentToParent = (data) => {
    this.props.callback(data)
}



render(){

        return(
            <div>
        <h2> Child  </h2>
        <p> {this.props.dataFromParent}  </p>
    <input type="text"  onChange={this.loadText}/>
            </div>
        )
    }
}

export default Child;
