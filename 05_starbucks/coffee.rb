class Coffee

  attr_reader :collected

  def initialize(type, sugars, size , name)
    @name = bad_spelling(name)
    @type = type
    @sugars = sugars 
    @size = size
    @prep_time = rand(120..300)
    @prep_start = Time.new
    @collected = false
  end


  def to_s
      puts "#{@name}'s #{@type}, #{@size}, #{@sugars}."
  end

  def bad_spelling(name)
    2.times {name[rand(0..name.length)] = ('a'..'z').to_a.sample}
    name.capitalize
  end

  def ready?
    current_time = Time.new
    time_dif = current_time - @prep_start
    if time_dif >= @prep_time
      puts "#{@name}'s #{@type}, #{@size}, #{@sugars}. is ready!"
      @collected = true
    else
      puts "Still working on #{@name}'s #{@type}, #{@size}, #{@sugars}."
    end
  end

end


