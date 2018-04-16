require'pry'

class Scrabble
  
  
  def Scrabble.score(word)
    score = 0
    score_chart = { 1 => ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2 => ['D', 'G' ],
      3 => ['B', 'C', 'M', 'P'],
      4 => ['F', 'H', 'V', 'W', 'Y'],
      5 => ['K'],
      6 => ['J', 'X'],
      10 => ['Q', 'Z']
      }
    letters = word.upcase.split('')
    letters.each do |letter|
      score_chart.each_pair do |key, value|
        if value.include?(letter)
         score += key
        end        
      end
    end
    puts score
  end
  
end

binding.pry

puts 'Nice score!'
