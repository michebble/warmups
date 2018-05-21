array = ["2016-07-01", "2016-07-04"]

def makeFriendlyDates(array)
  array.map! do |date|
    human_format(date)
  end
  array.last.select! do |element|
    !array.first.include?(element)
  end
  array.each do |date|
    array.join(' ')
  end
  array
end


def human_format(date)
  output = Array.new
  date_part = date.split('-').reverse
  output << to_ordinal(date_part[0])
  output << to_month(date_part[1])
  output << date_part[2]
end

def to_ordinal(day)
  
  
  first_char = day[0]
  last_char = day[1]
  if first_char == '1'
    day += 'th'
  elsif last_char == '1'
    day += 'st'
  elsif last_char == '2'
    day += 'nd'
  elsif last_char == '3'
    day += 'rd'
  else 
    day += 'th'
  end
  return day
end

def to_month(month)
  months = {
    '01' =>'January',
    '02' => 'February',
    '03' => 'March',
    '04' => 'April',
    '05' => 'May',
    '06' => 'June',
    '07' => 'July',
    '08' => 'August',
    '09' => 'September',
    '10' => 'October',
    '11' => 'November',
    '12' => 'December'
  }
  return months[month]
end

p makeFriendlyDates(array)