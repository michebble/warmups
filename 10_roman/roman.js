function toRomanNumber(number) {  
  var result = '';
  var decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumbers = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  // for (var i = 0; i <= decimalNumbers.length; i++) {
  //   while ( number >= decimalNumbers[i] ) {      
  //     result += romanNumbers[i]; 
  //     number -= decimalNumbers[i];
  //   }
  // }

  
  return result;
}

console.log(toRomanNumber(98));