const swapval = (arr) => {
    if (arr.length >= 1) {
        const first = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = first;
        return arr;
    } else {
        return false;
    }
};

const myArray = [1, 2, 3, 4, 5];
console.log(swapval(myArray));
