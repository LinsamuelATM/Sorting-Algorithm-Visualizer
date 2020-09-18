import React, { Component } from 'react'
import './SortingVisualizer.css'



export default class SortingVisualizer extends Component {

    
    render() {

        if(this.props.array !== undefined){

        return (
            <div className="array_container" >
         {this.props.array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor:'#1E656D',  
              height: `${value}px`,
            }}></div>
        ))}
            </div>
        )
    }else{
        return(
            <div>null</div>
        )
    }
    }
}
