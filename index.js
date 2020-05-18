// Your code here
function mapToNegativize(arr){
  return arr.map(el => el * -1)
}

function mapToNoChange(arr){
  return arr.map(el => el)
}

function mapToDouble(arr){
  return arr.map(el => el * 2)
}

function mapToSquare(arr){
  return arr.map(el => el ** 2)
}

function reduceToTotal(arr, startingPoint = 0){
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, startingPoint)
}

function reduceToAllTrue(arr) {
  return arr.reduce(function(allVals, currentVal) {
    return currentVal ? allVals = true : allVals = false
    })
}

function reduceToAnyTrue(arr) {
  return arr.reduce(function(allVals, currentVal) {
    return currentVal ? allVals = true : allVals = false
    })
}