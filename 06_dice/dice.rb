require'pry'

class Dice 

  class <<self
    def roll(number=1)
      @roll_vals = number.times.map do
        rand(1..6)
      end
      self
    end

    def total
      p [@roll_vals, @roll_vals.sum]
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