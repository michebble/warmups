require_relative 'allergies.rb'

allergies = Allergies.new(34)
p allergies.allergic_to?('chocolate')
# => true
p allergies.allergic_to?('cats')
# => false
p allergies.list
# => ['peanuts', 'chocolate']