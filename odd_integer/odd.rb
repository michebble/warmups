integers = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,-1]

unique_integers = integers.uniq

unique_integers.find do |integer|
   return integers.count(integer).odd?
end