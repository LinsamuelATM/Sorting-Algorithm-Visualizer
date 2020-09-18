import React, { Component } from 'react'
import Navbar from './Sorting_SiderBar'
import SortingVisualizer from './SortingVisualizer'
import {mergeSortAnimations , quickSortAnimations , heapSortAnimations , bubbleSortAnimation} from '../Sorting Algorithms/Sorting_Algorithms'
import './SortingVisualizer_container.css'


//original colour
const PRIMARY_COLOR =   '#1E656D';

//when being compared
const SECONDARY_COLOR = 'red';

const PIVOT_COLOR = "yellow"

export default class SortingVisualizer_container extends Component {
    state={
        array: [],
        arraySize: 110,
        speed: 15,
        sortingAlgorithm: '',
    }


    changeHandler = (event) => {
        const name = event.target.name;
        var value = event.target.value; 
        
        this.setState(prevstate => {
            const newState = { ...prevstate };
                if(name === "arraySize"){
                    if(value > 110 || value < 0){
                        value = " "
                    }
                }else if(name === 'speed'){
                    if(value > 15 || value < 0){
                        value = " "
                    }
                }
                newState[name] = parseInt(value) || 0;
            
            return newState;
            
          });

    }

    sortingAlgorithm_handler = (value) => {
        this.setState({sortingAlgorithm: value})
        this.resetArray()
        
    }

    mergeSort =()=> {

      const animations = mergeSortAnimations(this.state.array)

      for(let i = 0 ; i < animations.length ; i++){
         const arrayBars = document.getElementsByClassName('array-bar');
         const colorChange = i % 3 !== 2;
         if(colorChange){


             const[bar1Index , bar2Index] = animations[i]
             const bar1Style = arrayBars[bar1Index].style
             const bar2Style = arrayBars[bar2Index].style

             const color = i % 3 === 0? SECONDARY_COLOR : PRIMARY_COLOR;

             setTimeout(() => {
                bar1Style.backgroundColor = color;
                bar2Style.backgroundColor = color;
              }, (i * 1/this.state.speed)*50);


         }else{


            setTimeout(() => {
                const [bar1Index, height] = animations[i];
                const bar1Style = arrayBars[bar1Index].style;
                bar1Style.height = `${height}px`;
              }, (i * 1/this.state.speed)*50);

         }


      }
    }

    quickSort=()=>{
     const animations = quickSortAnimations(this.state.array)

     var previous_pivotIndex = 0;
     var curreent_pivotIndex = 0;
     var swapping_index1;
     var swapping_index2;



     for(let i = 0; i < animations.length; i++){
        const arrayBars = document.getElementsByClassName('array-bar');
    
        if(animations[i].length === 1){

           
            if(i=== 0){
                curreent_pivotIndex = animations[i][0]
                const pivotStlye = arrayBars[curreent_pivotIndex].style;

                setTimeout(() => {

                    pivotStlye.backgroundColor = PIVOT_COLOR 

                }, (i * 1/this.state.speed)*50)

            }else{

                previous_pivotIndex = curreent_pivotIndex;
                const previous_pivotStyle = arrayBars[previous_pivotIndex].style

                setTimeout(() => {
                    previous_pivotStyle.backgroundColor = PRIMARY_COLOR;

                }, (i * 1/this.state.speed)*50)

                curreent_pivotIndex = animations[i][0]
                const current_pivotStyle = arrayBars[curreent_pivotIndex].style

                setTimeout(() => {

                    current_pivotStyle.backgroundColor = PIVOT_COLOR

                }, (i * 1/this.state.speed)*50)
                
            }

        }else if(animations[i].length === 2){

          

    
            swapping_index1 = animations[i][0]
            swapping_index2 = animations[i][1]

            const swapping_bar1 = arrayBars[swapping_index1].style
            const swapping_bar2 = arrayBars[swapping_index2].style

            setTimeout(() => {
                swapping_bar1.backgroundColor = SECONDARY_COLOR;
                swapping_bar2.backgroundColor = SECONDARY_COLOR;

            }, (i * 1/this.state.speed)*50)
            


        }else if(animations[i].length === 3){

        

            const swapping_bar1 = arrayBars[swapping_index1].style
            const swapping_bar2 = arrayBars[swapping_index2].style

            setTimeout(() => {
                const bar1height = animations[i][0];
                const bar2height = animations[i][1];
                swapping_bar1.height = `${bar2height}px`;
                swapping_bar2.height = `${bar1height}px`;
                swapping_bar1.backgroundColor = PRIMARY_COLOR;
                swapping_bar2.backgroundColor = PRIMARY_COLOR;


            }, (i * 1/this.state.speed)*50)
            


        }  
     }
    }

    

    heapSort =()=> {

        const animations = heapSortAnimations(this.state.array);

        for(let i = 0 ; i < animations.length ; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const colorChange = i % 3 !== 2;
            if(colorChange){
   
   
                const[bar1Index , bar2Index] = animations[i]
                const bar1Style = arrayBars[bar1Index].style
                const bar2Style = arrayBars[bar2Index].style
   
                const color = i % 3 === 0? SECONDARY_COLOR : PRIMARY_COLOR;
   
                setTimeout(() => {
                   bar1Style.backgroundColor = color;
                   bar2Style.backgroundColor = color;
                 }, (i * 1/this.state.speed)*50);
   
   
            }else{
   
   
               setTimeout(() => {
                   const [bar1Index ,bar2Index, bar1height, bar2height] = animations[i];
                   const swapping_bar1 = arrayBars[bar1Index].style
                   const swapping_bar2 = arrayBars[bar2Index].style
                   

                    swapping_bar1.height = `${bar2height}px`;
                    swapping_bar2.height = `${bar1height}px`;
                 }, (i * 1/this.state.speed)*50);
   
            }
   
   
        }

    }

    bubbleSort =()=>{

        const animations = bubbleSortAnimation(this.state.array)

        for(let i = 0 ; i < animations.length ; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const colorChange = i % 3 !== 2;
            if(colorChange){
   
   
                const[bar1Index , bar2Index] = animations[i]
                const bar1Style = arrayBars[bar1Index].style
                const bar2Style = arrayBars[bar2Index].style
   
                const color = i % 3 === 0? SECONDARY_COLOR : PRIMARY_COLOR;
   
                setTimeout(() => {
                   bar1Style.backgroundColor = color;
                   bar2Style.backgroundColor = color;
                 }, (i * 1/this.state.speed)*50);
   
   
            }else{
   
   
               setTimeout(() => {
                   const [bar1Index ,bar2Index, bar1height, bar2height] = animations[i];
                   const swapping_bar1 = arrayBars[bar1Index].style
                   const swapping_bar2 = arrayBars[bar2Index].style
                   

                    swapping_bar1.height = `${bar2height}px`;
                    swapping_bar2.height = `${bar1height}px`;
                 }, (i * 1/this.state.speed)*50);
   
            }
   
   
        }

    }

    resetArray(){
        const array = [];
        for (let i = 0; i < this.state.arraySize; i++) {
            array.push(randomIntFromInterval(300, 900));
          }

          this.setState({array: array})
    }

    componentDidMount(){
        this.resetArray()
    }

    componentDidUpdate(preProps , preState){
        if(preState.arraySize !== this.state.arraySize){
            this.resetArray()
        }

    }

    render() {

        return (
            <div>
                <div className="navbar">

                    <h1>Sorting Algorithms</h1>

                    <Navbar
                    arraySize = {this.state.arraySize}
                    speed = {this.state.speed}
                    sortingAlgorithm = {this.state.sortingAlgorithm}
                    changeHandler = {this.changeHandler}
                    sortingAlgorithm_handler = {this.sortingAlgorithm_handler}
                    mergeSort = {this.mergeSort}
                    quickSort = {this.quickSort}
                    heapSort = {this.heapSort}
                    bubbleSort = {this.bubbleSort}
                   
                    />


                </div>

                <div className="visualizer">
                    
                    <SortingVisualizer
                    array={this.state.array}
                    arraySize = {this.state.arraySize}
                    />

                </div>
                
            </div>
        )
    }

    
}


function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
