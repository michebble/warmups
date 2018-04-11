require'pry'

class Robot
  def initialize
    @name = robot_name
  end

  def name
    puts @name
  end


  private

  def robot_name
    name = ""
    2.times {name << random_upcase}
    3.times {name << random_single_num}
    return name
  end

  def random_upcase
    (65 + rand(25)).chr
  end
  def random_single_num
    rand(0..9).to_s
  end


end

binding.pry

puts 'byebye'