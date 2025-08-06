function secondSmallestNumber(){
    let min = Infinity;
    let secondMin= Infinity;
    for(let i=0; i<arr.length;i++){

        if(arr[i] < min){
            
            secondMin = min;
            min=arr[i];
        }

        else if(arr[i] < secondMin){
            secondMin = arr[i];
        }
    }
    return secondMin;
}
    let arr=[34,21,27,10,53,12,65,223];
    console.log(secondSmallestNumber(arr));