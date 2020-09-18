import React, { Component } from 'react'
import './Sorting_SiderBar.css'

export default class Sorting_SiderBar extends Component {

    sort=(algo)=> {

        if(algo === "Merge Sort"){

            this.props.mergeSort()

        }

        if(algo === "Quick Sort"){

            this.props.quickSort()
            
        }

        if(algo === "Heap Sort"){

            this.props.heapSort()
            
        }

        if(algo === "Bubble Sort"){

            this.props.bubbleSort()
            
        }

    }




    render() {
        return (
            <div className="SideBar_container">
                <div>
                   <p> ArraySize (Max: 110)</p>
                   <input name="arraySize" value={this.props.arraySize} onChange={this.props.changeHandler}></input>
                </div>

                <div>
                <p> Speed  (Max: 15)</p>
                <input name="speed" value={this.props.speed} onChange={this.props.changeHandler}></input>

                </div>

                <div>


                <p>Sorting Algorithms </p>


                <div className="sort_Algorithms">

                    <div className={this.props.sortingAlgorithm === "Merge Sort"? "sort_selected": "sort_notselected"}  onClick={() => this.props.sortingAlgorithm_handler("Merge Sort")}> Merge Sort</div>


                    <div className={this.props.sortingAlgorithm === "Quick Sort"? "sort_selected": "sort_notselected"}  onClick={() => this.props.sortingAlgorithm_handler("Quick Sort")}> Quick Sort</div>


                    <div className={this.props.sortingAlgorithm === "Heap Sort"? "sort_selected": "sort_notselected"}  onClick={() => this.props.sortingAlgorithm_handler("Heap Sort")}> Heap Sort</div>


                    <div className={this.props.sortingAlgorithm === "Bubble Sort"? "sort_selected": "sort_notselected"}  onClick={() => this.props.sortingAlgorithm_handler("Bubble Sort")}> Bubble Sort</div>


                </div>


                
                </div>

                <div>
                    <button className="sort_button" onClick={() => this.sort(this.props.sortingAlgorithm)}>Sort</button>
                    
                </div>
                
            </div>
        )
    }
}
