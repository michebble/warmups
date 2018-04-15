require'pry'

class Dice 


  class <<self
    def roll(number)
      set_of_rolls = []
      number.to_i.times {set_of_rolls << roll_once}
      return set_of_rolls
    end

    def roll_once
      return rand(1..6)
    end
  end
end

binding.pry


puts
puts 'farewell'
puts