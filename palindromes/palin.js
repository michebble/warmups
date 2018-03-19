console.log('palindrome test')

function reverse(str) {
    var splitString = str.split('')
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join('')
    return joinArray
}

var input = prompt('Enter potential palindrome.').toLowerCase()
var joiner = []


joiner = input.split(' ')
var tester = joiner.join('')

var firstHalf = tester.slice(0 , tester.length /2)
var lastHalf = tester.slice(tester.length / 2, tester.length)

lastHalf = reverse(lastHalf);

if (firstHalf === lastHalf) {
  alert('Yup, that is a palindrome!')
} else if (lastHalf!== firstHalf) {
  alert('Nope, not a palindrome.')
}