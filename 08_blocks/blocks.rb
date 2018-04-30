require 'pry'

@blocks = [
  ['B','O'],
  ['X','K'],
  ['D','Q'],
  ['C','P'],
  ['N','A'],
  ['G','T'],
  ['R','E'],
  ['T','G'],
  ['Q','D'],
  ['F','S'],
  ['J','W'],
  ['H','U'],
  ['V','I'],
  ['A','N'],
  ['E','R'],
  ['F','S'],
  ['L','Y'],
  ['P','C'],
  ['Z','M']
]
# def can_make_word(word) 



#   word.upcase.chars.each do |letter|
#   wordArray.each do |letter|
#     block_index = []
#     exist = false
#     blocks.each.with_index do |block, i|
#       if block.include?(letter)
#         exist = true
#         block_index << i
#       end
#     end
#     if exist
#       blocks.slice!(block_index[0], 1)
#     else
#       break
#     end
#     binding.pry
#   end
#   puts "can make " + word
# end





def can_make_word(word)
  block_str = @blocks
  blocks_found = 0
  word.upcase.chars.each do |letter|
    if block_str.include?(letter)
      index = block_str.index
      block_str = block_str.chars.delete_at(index)
      if index.even?
        block_str = block_str.chars.delete_at(index)
      else
        block_str = block_str.chars.delete_at(index-1)
      end
      blocks_found += 1
    end
  end
  blocks_found == word.length
end




can_make_word("A")
# => true
can_make_word("BARK")
# => true
can_make_word("BOOK")
# => false
can_make_word("TREAT")
# => true
can_make_word("COMMON")
# => false
can_make_word("SQUAD")
# => true
can_make_word("CONFUSE")
# => true
can_make_word("BOUGHT")
# => false