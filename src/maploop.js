import React, {Component} from 'react';

class Maploop extends Component{
    constructor(props){
        super(props);
        this.state ={
            users:[
                {name:'yossi'},{name:'david'},{name:'shlomi'}
            ]
        }
}

addUser = (e) => {
    var newUser = e.target.value;
this.setState((currentState) => {
    return {user:newUser}
})
}

addToList = () => {
   var newUsers = this.state.users.concat({name: this.state.user});
   this.setState({users : newUsers});
}


render(){
var userNames = this.state.users.map((user, i) => { 
    return(
    <li key={i}> {user.name} </li>
    )
})

        return(
            <div>
<ul>
{userNames}
</ul>

<input type="text" onChange={this.addUser} />
<button onClick={this.addToList}> ADD TO LIST </button> 


            </div>
        )
    }
}

export default Maploop;
