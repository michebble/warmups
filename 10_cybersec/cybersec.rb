# class FileToHash
#   def initialize(file_name)
require 'json'

raw_input = IO.readlines('clues.txt')
data = Array.new

raw_input.each do |line|
  data.push line.gsub("\n", "").split(',')
end
data.shift

output = {}

data.each do |detail|
  if !output[detail[0]]
    output[detail[0]] = Array.new
  end 
  entry = Hash.new
  entry['product'] = detail[1]
  entry['unitPrice'] = detail[2]
  entry['units'] = detail[3]
  entry['totalPrice'] = sprintf("%.2f",(detail[2].to_f * detail[3].to_f))
  output[detail[0]].push entry
end

p output
#   end
# end

