order = {
  name: '',
  items: []
}

puts "Welcome to lunch land. Please complete your order."
print "Name for order: "
order[:name] = gets.chomp
loop do
  print "#{order[:name]} wants to order: "
  order[:items].push  gets.chomp
  print "Add another item to the order? (y/n): "
  answer = gets.chomp
  if answer[0].downcase != "y"
    break
  end
end

if order[:items].length > 2
  order_list = order[:items].join(", ")
  order_list = order_list.reverse!
  order_list[order_list.index(" ,")] = " & "
  order_list = order_list.reverse!
else
  order_list = order[:items].join(", ")
end

puts " #{order[:name]} ordered a #{order_list}"