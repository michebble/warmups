require_relative'coffee'

c1 = Coffee.new('latte','2 sugars','medium','Darryl')

while !c1.collected
  puts "please wait over there"
  print "ask about order? "
  input = gets.chomp
  if input
    c1.ready?
  end
end