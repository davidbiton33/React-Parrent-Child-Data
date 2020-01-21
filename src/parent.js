import React, {Component} from 'react';
import Child from './child';
class Parent extends Component{
    constructor(props){
        super(props);
        this.state ={
            msg: 'Text From Parent',
            

        }
}

updateState = (dataToState) => {
    var data = dataToState;
    this.setState({dataFromChild:data})

}

render(){
    var text3  = this.state.dataFromChild ? <p> Data From Child : {this.state.dataFromChild}</p> : <p> loading.. </p>

        return(
            <div>
                {text3}
        <h1> Parent </h1>

        <Child dataFromParent={this.state.msg}  callback={data => this.updateState(data)}  />
            </div>
        )
    }
}

export default Parent;
