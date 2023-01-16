// merge sort top level, uses mergeInOrder(x, y)
function mergeSort(array){
    if (array.length < 2){
      return array
    } else {
      let x = mergeSort(array.slice(0, Math.floor(array.length/2)))
      let y = mergeSort(array.slice(Math.floor(array.length/2)))
      const arr = mergeInOrder(x, y)
      return arr
    }
  }
  
  // merge in order
  function mergeInOrder(x, y){
    let arr = []
    while(x.length > 0 && y.length > 0){
      if (x[0] < y[0]){
        arr.push(x.shift()) 
      } else {
        arr.push(y.shift())
      }
    }
    while (x.length > 0){
      arr.push(x.shift())
    }
    while (y.length > 0){
      arr.push(y.shift())
    }
    return arr
  }
  