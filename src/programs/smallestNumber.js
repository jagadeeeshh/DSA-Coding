function smallestNumber(){
    let min =arr[0];
    for(let i=0; i<arr.length;i++){

        if(arr[i]> min){

            min=arr[i];
        }
    }
    return min;
}
    let arr=[-1,-3,27,3,0,134,65];
    console.log(smallestNumber(arr));