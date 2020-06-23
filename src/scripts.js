$(document).ready(function() {
  $('form#trianglelengths').submit(function(event) {
    $(".answer").hide();
    const a = parseInt($("#side1").val());
    const b = parseInt($("#side2").val());
    const c = parseInt($("#side3").val());
    if ( a+b <= c || b+c <= a || c+a <= b) {
      $('#notatriangle').show();
    } else if (a === b && b === c) {
      $('#equilateral').show();
    } else if (a === b || b === c || a === c) {
      $('#isoceles').show();
    } else {
      $('#scalene').show();
    }
    event.preventDefault();
  });
});

//Equilateral: All sides are equal.
//Isosceles: Exactly 2 sides are equal.
//Scalene: No sides are equal.
//NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
