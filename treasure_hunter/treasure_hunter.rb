map1 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","X","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
]

map2 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","X","A","A","A"]
]
  
map3 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","X"],
  ["A","V","A","A","A"]
]
  
map4 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","A"],
  ["X","V","A","A","A"]
]

require 'pry'
map_to_scan = map2
treasure_mark = "X"
x_cord = 0
y_cord = 0
count = 0

map_to_scan.each do | row | 
  if row.include?(treasure_mark)
  x_cord = row.index(treasure_mark)
  y_cord = count
  end
  count += 1
end

puts "[#{y_cord}, #{x_cord}]"
