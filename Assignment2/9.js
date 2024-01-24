const reverseNumber = (num) => {
    return parseFloat(num.toString().split('').reverse().join(''));
};

const x = 32243;
console.log(reverseNumber(x));  
