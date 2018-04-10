def get_squares(array_of_numbers)
  collected_squares =  find_true_squares(array_of_numbers)
  collected_squares.uniq!
  return collected_squares.sort!
end

def find_true_squares(array_of_numbers)
  return array_of_numbers.select! { |number| Math.sqrt(number) % 1 == 0}
end

puts get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]