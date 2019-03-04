import React from "react"

class Rbuttons extends React.Component {
    render(){
        return(
            <div>
            {this.props.teams.map((item, id)=>
                <span key={item+id}>
                <input type="radio" name="team" id={item} value={item} onChange={this.props.onChange}/> 
                <label for={item} >{item} </label>
                </span>)}
            </div>
            )
}
}
export default Rbuttons;
