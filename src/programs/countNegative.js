function searchElement(arr, x) {
    let count =0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

let arr = [45, -56, 11, -21, 34, 4,-32,12,11,55];
let result = searchElement(arr, 21);
console.log("Searched element in the array is at index: " + result);
