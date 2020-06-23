export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}


/* if ( a+b <= c || b+c <= a || c+a <= b) {
  $('#notatriangle').show();
} else if (a === b && b === c) {
  $('#equilateral').show();
} else if (a === b || b === c || a === c) {
  $('#isoceles').show();
} else {
  $('#scalene').show();
} */


//Equilateral: All sides are equal.
//Isosceles: Exactly 2 sides are equal.
//Scalene: No sides are equal.
//NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side

