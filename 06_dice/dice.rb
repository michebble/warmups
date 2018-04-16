require'pry'

class Dice 
  



  class <<self
    def roll(number=1)
      @set_of_rolls = []
      number.to_i.times {@set_of_rolls << roll_once}
      self
    end

    def roll_once
      return rand(1..6)
    end

    def total
      puts "[#{@set_of_rolls}, #{@set_of_rolls.sum}]"
    end

    
    

  end
end

binding.pry


puts
puts 'farewell'
puts

# ---------
# | *   * |
# |   *   |
# | *   * |
# ---------