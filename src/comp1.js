import React, {Component} from 'react';

class Comp1 extends Component{
    constructor(props){
        super(props);
        this.state ={
            num:0,
            inputBackground:'red',
            showText: false
        }
}

inputBgColor = (e) => {
    var bgColor = e.target.value.length > 5 ? 'green' : 'red';
    this.setState({inputBackground:bgColor})
} 

updateNum = () => {
    // var newNum = this.state.num + 1;
    // this.setState({num : newNum})
    this.setState((currentState) => {
        return {num : currentState.num+1}
    }, () => console.log('state update') )

}

updateText = () => {
    var showHide = this.state.showText;
this.setState({showText : !showHide })

}

render(){
var text;

    if(this.state.showText){
       text = <h1> HELLO</h1>
    }

    var styleInputElement ={
        'background' : this.state.inputBackground ,
        'border' : '2px solid black'
    }

        return(
            <div>
                {text}
                <p>
            <button onClick={this.updateText}> show/Hide </button>
                HELLO FROM COMP1 
               <b> {this.state.num} </b> 

               <button onClick={this.updateNum}> UPDATE </button>
                </p>
            <input type="text" style={styleInputElement}  onKeyUp={this.inputBgColor} />
            </div>
        )
    }
}

export default Comp1;
