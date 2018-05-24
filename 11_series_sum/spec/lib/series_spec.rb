require 'series'

describe Series do
  it 'can do this sum' do
    sum = Series.new
    expect(sum.series_sum(1)).to eq "1.00"
  end

  it 'can do another sum' do
    sum = Series.new
    expect(sum.series_sum(2)).to eq "1.25"
  end

  it 'can even do this sum' do
    sum = Series.new
    expect(sum.series_sum(5)).to eq "1.57"
  end
end