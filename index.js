// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    let counter = 0
    for(let sides of this.sides){
      counter = counter+sides
    }
    return counter
  }
}

class Triangle extends Polygon{
  get isValid(){
    let firstTwoSides = this.sides[0]+this.sides[1]
    let restOfSides = this.sides[1]+this.sides[2]
    if(firstTwoSides > this.sides[2] && restOfSides > this.sides[0]){
      return true
    }
    return false
  }
}

class Square extends Polygon{
  get isValid(){
    let squareSide = this.sides[0]
    let finder = this.sides.find( elem => elem !== squareSide)
    if(finder === undefined){
      return true
    }
    return false
  }

  get area(){
    let side = this.sides[0]
    return side*side
  }
}