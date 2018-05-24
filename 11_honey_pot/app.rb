
def check_honey_pots(number)
  honey_pots = Array.new(number, false)

  1.upto(honey_pots.length) do |factor|
    honey_pots.each_index do |index|
      honey_pots[index] ^= true if (index+1) % factor == 0
    end
  end

  honey_pots.each_index
    .select{|index| honey_pots[index]}
    .map{|index| index + 1}
end

p check_honey_pots(100)