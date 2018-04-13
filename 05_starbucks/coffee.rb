class Coffee

  attr_reader :collected

  def initialize(type, sugars, size , name)
    @name = bad_spelling(name)
    @type = type
    @sugars = sugars 
    @size = size
    @prep_time = rand(12..30)
    @prep_start = Time.new
    @collected = false
  end


  def to_s

      "#{@name}'s #{@type}, #{@size}, #{@sugars}"
  end

  def bad_spelling(name)
    2.times {name[rand(0..name.length)] = ('a'..'z').to_a.sample}
    name.capitalize
  end

  def ready?
    current_time = Time.new
    time_dif = current_time - @prep_start
    if time_dif >= @prep_time && !collected
      puts "#{to_s}, is ready!"
      @collected = true
    elsif !collected
      puts "Still working on #{to_s}."
    end
  end

end


