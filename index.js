// Your code here
function mapToNegativize(array){
  let newA = []
  for (let i = 0; i < array.length; i++){
    newA.push(array[i] * -1) 
  }
  return newA
}

function mapToNoChange(array){
  let newA = []
  for (let i = 0; i < array.length; i++){
    newA.push(array[i]) 
  }
  return newA
}

function mapToDouble(array){
  let newA = []
  for (let i = 0; i < array.length; i++){
    newA.push(array[i] * 2) 
  }
  return newA
}

function mapToSquare(array){
  let newA = []
  for (let i = 0; i < array.length; i++){
    newA.push(array[i] ** 2) 
  }
  return newA
}

function reduceToTotal(source, startTot=0){
  let tot = startTot
  for (let i = 0; i < source.length; i++){
    tot = tot + source[i] 
  }
  return tot
}

function reduceToAllTrue(source){
  for (let i = 0; i < source.length; i++){
    if (!source[i]){
      return false
    }
  }
  return true
}
function reduceToAnyTrue(source){
 
  for (let i = 0; i < source.length; i++){
    if (source[i]){
      return true
    }
  }
  return false
}