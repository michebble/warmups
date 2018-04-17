# Scrabble score calculater

```
Scrabble.score("cabbage")
# => 14
```

### Method
The class contains a hash. This hash uses the score as the key, and an array of letters associated with the score as the value.

The class takes a string as an arguement. The string is first made uppercase with `.upcase`, and then split into an array of it's letters `.split('')`. They are made uppercase to match the format of the the letters in the score hash. 

Each letter in the array is then tested against each value array in the score hash. If the letter is included in the value array, then the key is returned and added into in a variable `score`. 

Once all lettters have been tested against the score hash, the final `score` is returned.

### Improvement
For readablity, I would change the key value orientation so that the letter is the key. Also, the speed could be increased by spilting up the score hash so that each letter is paired with it's score. This would reduce look up time as it would remove the need for looping through arrays.

## Next
Add functions for triple and double word/letter scores.
