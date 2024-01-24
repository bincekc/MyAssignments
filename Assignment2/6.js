const equalPAndS = (input) => {
    const pCount = (input.match(/p/g) || []).length;
    const sCount = (input.match(/s/g) || []).length;
    return pCount === sCount;
};

console.log(equalPAndS('paatpss'));
console.log(equalPAndS('paatps'));  
