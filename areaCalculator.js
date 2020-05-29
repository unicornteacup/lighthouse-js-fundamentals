function calculateRectangleArea(length, width){
  let areaRec = 0
  
  if (length <= 0 || width <= 0){
    areaRec = undefined
  }else{
    areaRec = length * width
  }
  return areaRec
}


function calculateTriangleArea(base, height){
  let areaTri = 0
  
  if (base <= 0 || height <= 0){
    areaTri = undefined
  }else{ 
    areaTri = base * height / 2
  }
  return areaTri
}


function calculateCircleArea(radius){
  let areaCirc = 0
  if (radius <= 0){
    areaCirc = undefined
  }else{
    areaCirc =  3.14159 * (radius * radius)
  }
  return areaCirc
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(10, -5));


console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(-1));