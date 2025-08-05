function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}

let arr = [45, 56, 11, 21, 34, 4];
let result = searchElement(arr, 21);
console.log("Searched element in the array is at index: " + result);
