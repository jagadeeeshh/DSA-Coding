function secondLargestNumber(){
    let max = -Infinity;
    let secondMax= -Infinity;
    for(let i=0; i<arr.length;i++){

        if(arr[i]> max){

            secondMax = max;
            max=arr[i];
        }

        else if(arr[i]> secondMax){
            secondMax = arr[i];
        }
    }
    return secondMax;
}
    let arr=[34,75,27,10,53,12,65,223];
    console.log(secondLargestNumber(arr));