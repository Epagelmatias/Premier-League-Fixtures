import React from "react"
import "./css.css"

class Images extends React.Component {
    render(){
        return(
            <div className="images">
                {this.props.teams.map((item, id)=>{return(
                
                <img className="zoom" alt={item}
                onClick={this.props.onClick}
                key={item+id}
                src={process.env.PUBLIC_URL + `/images/plimages/${item}.png`}/>
                
                
            )})}
            </div>
        )}}
export default Images;
