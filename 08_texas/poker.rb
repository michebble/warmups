require 'pry'

require_relative 'player'

RANKS = %i[ace two three four five six seven eight nine ten jack queen king]
SUITS = %i[heart club diamond spade]

Card = Struct.new(:rank, :suit) do
  def to_s
    "#{rank.capitalize} of #{suit.capitalize}s"
  end
  def ==(other)
    self.rank == other.rank &&
      self.suit == other.suit
  end
end

deck = RANKS.flat_map {|rank| SUITS.map {|suit| Card.new(rank, suit).to_s } }

puts "Welcome to Texas Hold'em Poker!"

number_of_players = 0
loop do 
  print "How many players (2-8) ? "
  number_of_players = gets.to_i
  if number_of_players >= 2 && number_of_players <= 8
    break
  end
end



players = number_of_players.times.collect { Player.new }

puts

shuffled = deck.shuffle()
shuffled.pop()

flop = Player.new
river = Player.new
turn = Player.new

def deal(players, deck)
  players.each do |player|
    player.hand << deck.pop()
  end
end

2.times {deal(players, shuffled)}

3.times {flop.hand << shuffled.pop()}

river.hand << shuffled.pop()
turn.hand << shuffled.pop()

puts
# # user = players.shift()
# puts "Your hand: #{user.hand.join(', ')}."

players.each_with_index do |player, player_num|
  if player_num.zero?
    puts "Your hand: #{player.hand.join(', ')}."
  else
    puts "CPU #{player_num}'s hand: #{player.hand.join(', ')}."
  end
end

puts
puts "Flop: #{flop.hand.join(', ')}."
puts "River: #{river.hand.join(', ')}."
puts "Turn: #{turn.hand.join(', ')}."

