require 'pry'

## better to move from start to end then try to start in the middle and waver between each direction. That way I can be sure I haven't missed a possibility.

def score_tally(array)
  values = Array.new(1..26)
  keys = Array.new('A'..'Z')

  score = Hash.new[keys.zip(values)]

  sum = 0
  array.each_with_index do |letter, index|
    sum = sum + (score[letter] * (index +1) )
  end
  return sum
end

def balance(word)
  input = word.chars

  middle = input.length / 2

  loop do

    first_half = input[0...middle]

    thing = middle + 1

    second_half = input[thing,input.length]

    balance = input[middle]

    first = score_tally(first_half.reverse)
    second = score_tally(second_half)



    if first == second

      return first_half.join + " " + balance.to_s + " " + 
      print " "
      print balance.to_s
      print " "
      print second_half.join
      print " - "
      puts second
      
      break
    elsif first > second
      middle = middle - 1
    elsif second > first
      middle = middle + 1
    end
  end
end

