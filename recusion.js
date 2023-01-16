// recursive summation function
function sumTo(n) {
  return (n == 0) ? n : (n += sumTo(n-1));
}

// power function
function power(x, y){
  return (y==1)
    ? x
    : (x * power(x, y-1))
}

// factorial
function factorial(n){
  return (n == 1)
    ? n
    : (n * factorial(n-1))
}

// check all values in array against callback
function all(array, callback){
  return (callback(array.pop()))
    ? callback(array.pop())
    : false
}

// iterative fibonacci
function fibs(number){
  fibsArr = [0, 1]
  for (let i = 1; fibsArr.length < number; i++) {
    fibsArr.push(fibsArr[i-1] + fibsArr[i])  
  }
  return fibsArr
}

// recursive fibonacci
function fibsRec (number){
  if(number <= 2){
    return Array.from(Array(number).keys())
  } else {
    let arr = fibsRec(number-1)
    arr.push(arr[arr.length - 2] + arr[arr.length - 1])
    return arr
  }
}
