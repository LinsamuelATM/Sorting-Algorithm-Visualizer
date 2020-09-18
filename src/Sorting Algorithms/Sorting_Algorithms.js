export function mergeSortAnimations(array){
    const animations = [];
    if(array.length === 0 ){
        return array
    }else{
        mergeSort(array, 0 , array.length -1 , animations )
        return animations
    }

    


}


function mergeSort( array , leftStart , rightEnd , animations){
   
if(leftStart === rightEnd) return;

    const middle = Math.floor((leftStart + rightEnd)/2);
    mergeSort(array, leftStart , middle , animations)
    mergeSort(array, middle + 1 , rightEnd , animations )
    merge(array, leftStart, rightEnd , animations)
}


 export function merge(array, leftStart, rightEnd , animations){

    var temp_array = array.slice()

    var main_array = array;


    var middle= Math.floor((rightEnd + leftStart)/2);
    var rightStart = middle+ 1;


    var start = leftStart;

    var left = leftStart;
    var right = rightStart;

    while(left <= middle && right <= rightEnd){

        animations.push([left , right ])

        animations.push([left , right ])

        if(temp_array[left] <= temp_array[right]){

            animations.push([start , temp_array[left]])

            main_array[start] = temp_array[left];
            left++;

        }else{

            animations.push([start , temp_array[right]])

            main_array[start] = temp_array[right];
            right++;

        }
        start++;
    }

    while(left <= middle){

        animations.push([left , left])

        animations.push([left , left])

        animations.push([start , temp_array[left]])
        
        main_array[start] = temp_array[left];
        start++;
        left++;
    }
}

export function quickSortAnimations(array){
    const animations =[];
    if(array.length === 0){
        return
    }else{
        quickSort(array , 0 , array.length-1 , animations)
        return animations
    }
}



function quickSort(array , left , right , animations){
    
    var index;

    if(array.length > 1){
        index = partition(array , left ,right , animations)

        if(left < index -1){
            quickSort(array, left , index - 1 , animations)
        }

        if(index < right){
            quickSort(array  , index , right , animations)
        }
    }
    return array

}


function partition(array , left , right , animations){

    var pivot = array[Math.floor((right + left) / 2)],
    i= left,
    j= right;

    animations.push([Math.floor((right + left) / 2)])

while (i <= j) {

    while (array[i] < pivot) {
        i++;
    }

    while (array[j] > pivot) {
        j--;
    }

    if (i <= j) {
  
        animations.push([i , j])
        animations.push([ array[i], array[j], 0])

        swap(array , i, j , animations );
        i++;
        j--;
    }
}

return i;

}

export function heapSortAnimations(array){
   
    const orignial_array = array
    const animations = [];
    var array_length = array.length;

    if(array_length === 0){
        return array
    }else{
        for (let i = Math.floor(array_length/ 2); i >= 0; i -= 1)      {

            if(animations !== undefined){

            maxHeap(array, i , array_length , animations)
            }

          }

       
    
        for (let i = array.length - 1; i > 0; i--) {

          
            const index = orignial_array.indexOf(array[0])
            animations.push([index , i])
            animations.push([index , i])
            animations.push([index , i , array[0] , array[i]])
            swap(array, 0, i)
            array_length--

            console.log(animations)
            
            maxHeap(array, 0 , array_length , animations)
            }
        
        }
        console.log(array)
        return animations
    }


function maxHeap(input, i , array_length , animations) {
    
    const left = 2 * i + 1
    const right = 2 * i + 2
    let max = i

    if (left < array_length && input[left] > input[max]) {
        max = left
    }

    if (right < array_length && input[right] > input[max])     {
        max = right
    }

    if (max != i) {

        animations.push([i , max])
        animations.push([i , max])
        animations.push([i , max, input[i] , input[max]])
        
        swap(input, i, max)
        maxHeap(input, max , array_length, animations)
    }
}



export function bubbleSortAnimation(array){
    const animations = [];

    if(array.length === 0){
        return
    }else{

        bubbleSort(array , animations)

    }
    console.log(array)

    return animations


}


function bubbleSort(array , animations){

    for(let i = 0; i < array.length ; i++){
        for(let j  = 0 ; j < array.length; j++){
            if(array[j] > array[j+1]){
                animations.push([j , j+1])
                animations.push([j , j+1])
                animations.push([j , j + 1 , array[j] , array[j+1]])
                swap(array , j , j+1)
            }

        }
    }


}


function swap(array , firstIndex, secondIndex){

    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}