export function analyzeArray(numberArray){
    return {
        average : avgArray(numberArray), 
        min : Math.min(...numberArray), 
        max : Math.max(...numberArray), 
        length : numberArray.length, 
    }
}

export function sumArray(numberArray){
    return numberArray.reduce((accum, currentNum) => {
        return accum + currentNum
    })
}

export function avgArray(numberArray){
    return sumArray(numberArray) / numberArray.length
}