function greastNumber(){
    let max =arr[0];
    for(let i=0; i<arr.length;i++){

        if(arr[i]> max){

            max=arr[i];
        }
    }
    return max;
}
    let arr=[34,21,27,3,134,65];
    console.log(greastNumber(arr));
