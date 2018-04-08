test_string = "The_Andy_Griffith_Show"




def spiner(string)
  
  split_array = string.downcase.split(/[\W+\_]/)

  output_string =split_array.join('-')

  puts output_string
end

spiner test_string