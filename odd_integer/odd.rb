arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,-1]

new_arr = arr.uniq

new_arr.each do |num|
   total = arr.count(num)
   if total.odd?
     puts num
   end
 end