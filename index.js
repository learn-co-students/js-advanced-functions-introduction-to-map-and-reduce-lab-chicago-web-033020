// function mapToNegativize(array) {
//   return array.map(num => num * -1)
// }

function mapToNegativize(array) {
  let array2 = []
  for (let i=0; i<array.length; i++) {
    array2.push(array[i] * (-1))
  }
  return array2
}

function mapToNoChange(array) {
  return array
}


// function mapToDouble(array) {
//   return array.map(num => num * 2)
// }

function mapToDouble(array) {
  let array2 = []
  for (let i = 0; i < array.length; i++) {
    array2.push(array[i] * 2)
  }
  return array2
}


// function mapToSquare(array) {
//   return array.map(num => num ** 2)
// }

function mapToSquare(array) {
  let array2 = []
  for (let i = 0; i < array.length; i++) {
    array2.push(array[i] ** 2)
  }
  return array2
}

function reduceToTotal(array, start=0) {
  let total = start
  for (let i = 0; i < array.length; i++) {
    total += array[i] 
  }
  return total
}

function reduceToAllTrue(array) {
  for (let i=0; i < array.length; i++) {
    if (!array[i]) return false 
  }
  return true
}

function reduceToAnyTrue(array) {
  for (let i=0; i<array.length; i++) {
    if (array[i]) return true
  }
  return false
}