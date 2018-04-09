require 'pry'

coded_message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH."

def decoder(coded_message)
  base_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  code_key = "DEFGHIJKLMNOPQRSTUVWXYZABC";
  split_input = coded_message.split("")
  output = []
  split_input.each do |letter|
    if code_key.index(letter) != nil
      position = code_key.index(letter)
      output.push(base_alphabet[position])
      # binding.pry
    else 
      output.push(letter)
    end
    
  end
  return output.join("")
end

puts decoder coded_message