

puts 'Daniel is staring at his computer.'
puts 'He looks up at you.'

leet_replacements = {
  'i' => '1',
  'e' => '3',
  'a' => '4',
  'o' => '0'
}



loop do
  print 'What will you say? '
  question = gets.chomp

  if question == ''
    puts '"Fine, bro. Be that way."'
    puts "Daniel looks back at his computer.\n\n"
    break
  elsif question.include?('?')
    puts "Sure, bro.\n\n"
  elsif question == question.upcase
    puts "Woah, chillax bro.\n\n"
   else
    puts "Whatever, bro.\n\n"
  end
  
end




# elsif question[0..2].downcase == 'bro'
  #   leet_conversion = question[3..-1].gsub(Regexp.union(leet_replacements.keys), leet_replacements)

  #   puts "Bro! You mean#{leet_conversion}"