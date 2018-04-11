require'pry'

class Robot
  def initialize
    @name = robot_name
    @name_calls = 0
    @instruction_calls = 0
  end

  def name
    if @name_calls == 2
      reset
    else
      puts @name
      @name_calls += 1
    end
    @instruction_calls += 1
  end

  def instruction_count
    puts @instruction_calls
    @instruction_calls += 1
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

  def reset
    puts "Resetting to factory settings."
    @name = robot_name
    @name_calls = 0
    @instruction_calls += 1
  end

end

binding.pry

puts 'byebye' 