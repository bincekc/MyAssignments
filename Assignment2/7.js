const a = (input) => {
    if (input.length >= 3) {
        const b = input.slice(-3);
        return b.repeat(4);
    } else {
        return false;
    }
};

console.log(a('Python 3.0'));   
console.log(a('JS'));            
console.log(a('JavaScript'));    
