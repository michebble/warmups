console.log('loops warmup');

/*
Print out all the leap years in the last 100 years.

*/

for (year = 1918; year <= 2018; year++) {
  if (year % 4 === 0 && year % 100 !== 0) {  // leap years that are divisible by 100 are not leap years.
  	console.log(year + ' was a leap year.');
  } else if (year % 400 === 0) {             // but years that are divisble by 400 are leap years
    console.log(year + ' was a leap year.');
  }
}



/*
For numbers between 1 and 200:
a) print out multiples of 7.
b) print out every second odd number.

*/

var counter = 1; //counter to find every second odd

for (i = 1; i <=200; i++) {
  if (i % 7 === 0 && i % 2 !== 0) {             // checks if i is a multiple of 7 and an odd number
    console.log(i + ' is divisible by seven.');
    counter++;                                  // adds to counter
  } else if (i % 7 ===0) {
    console.log(i + ' is divisible by seven.');
  } else if (i % 2 !== 0) {                     // check if i is an odd number
  	if (counter % 2 == 0) {                     // check counter to see if the odd number should be printed.
  	  console.log(i)
  	  counter++;
  	} else {
  	  counter++;                                // adds to counter
  	}
  } 
}




// for (prime = 0; prime <= 200; prime++) {
// 	if (prime )
// }