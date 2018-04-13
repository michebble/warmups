require_relative'coffee'
require'pry'
types = ['latte', 'flat white', 'short black', 'espresso']
size = ['short', 'medium', 'tall']

puts "Welcome to starbogs"



c1 = Coffee.new('latte','2 sugars','medium','Darryl')
c2 = Coffee.new('flat white','no sugars','tall','Brent')
c3 = Coffee.new('mug-o-cino','4 sugars','large','Simon')
coffees = [c1.collected, c2.collected , c3.collected]

while !coffees.all? { |boolean| boolean == true}
  puts "please wait over there"
  print "ask about order? "
  input = gets.chomp
  if input
    c1.ready?
    c2.ready?
    c3.ready?
  end
  coffees = [c1.collected, c2.collected , c3.collected]

end

puts "Enjoy your coffee"

def print_out(array)
  array.each_with_index do |item, index|
    puts "#{index}. item"
  end
end