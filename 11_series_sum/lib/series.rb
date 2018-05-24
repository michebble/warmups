require 'pry'

class Series 
  def series_sum(number)
    results = Array.new
    1.upto(number) do |factor|
      results << create_fraction(factor)
    end
    sum(results)
  end

  private
  def create_fraction(factor)
    1/(3*factor.to_f-2)
  end

  def sum(results)
    '%.2f' % results.reduce {|sum,f| sum + f}
  end
end

