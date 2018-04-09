
def get_squares(array_of_numbers)
  collected_squares =  collect_squares(array_of_numbers)
  collected_squares.uniq!
  return collected_squares.sort!
end

def collect_squares(array_of_numbers)
  true_squares = []
  array_of_numbers.each do |number|
      if Math.sqrt(number) % 1 == 0
        true_squares << number
      end 
  end
  return true_squares
end

puts get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]