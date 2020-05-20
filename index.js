// Your code here
const mapToNegativize = array => {
  return array.map(value => value * -1)
}

const mapToNoChange = array => array.map(value => value)

const mapToDouble = array => array.map(value => value * 2)

const mapToSquare = array => array.map(value => value ** 2)

const reduceToTotal = (array, start = 0) => array.reduce(function(total, element){ return element + total}, start)

const reduceToAllTrue = (array) => {
  return array.reduce(function(total, element) {
    if (element){
      total = true
    } else {
      total = false
    } return total
  })
}

const reduceToAnyTrue = (array) => {
  return array.reduce (function(total, element){
    if (element){
      return true
    } else {
      return false
    }
  })
}
