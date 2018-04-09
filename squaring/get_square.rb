
def get_squares(possible_squares)
  collected_squares =  collect_squares(possible_squares)
  collected_squares.uniq!
  return collected_squares.sort!
end

def collect_squares(possible_squares)
  squares_array = []
  possible_squares.each do |number|
      if Math.sqrt(number) % 1 == 0
        squares_array << number
      end 
  end
  return squares_array
end




# answer = Math.sqrt(first_number)

puts get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]