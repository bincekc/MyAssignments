function genrand(length){
    const charc='abcdefghijklmnopqrstuvwxyz0123456789';
    let randId='';

    for(let i=0;i<length;i++){
        const randIndex=Math.floor(Math.random()*charc.length);
        randId+=charc.charAt(randIndex);
    }
    return randId;
}

const randId=genrand(8);
console.log(randId);