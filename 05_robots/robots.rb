require'pry'

class Robot
  def initialize
    @name = robot_name
    @name_calls = 0
    @instruction_calls = 0
    @time_created = Time.now
    @time_booted = Time.now
  end

  def name
    if @name_calls == 2
      reset
    else
      puts "Bzzt.. MY NAME IS #{@name}." 
      @name_calls += 1
    end
    @instruction_calls += 1
  end

  def instruction_count
    puts @instruction_calls
    @instruction_calls += 1
  end

  def timers
    time_now = Time.now
    since_created = time_now - @time_created
    since_booted = time_now -@time_booted
    puts "Beep! #{since_booted.to_i} SECONDS SINCE LAST BOOT. Boop! #{since_created.to_i} SECONDS SINCE CREATATION."
  end

  private

  def robot_name
    name = ""
    2.times {name << rand(65..91).chr}
    3.times {name << rand(0..9).to_s}
    return name
  end

  def reset
    puts "..RE-INITIALIZING FACTORY SETTINGS.."
    @name = robot_name
    @name_calls = 0
    @instruction_calls += 1
    @time_booted = Time.now
  end

end

binding.pry

puts 'bye' 