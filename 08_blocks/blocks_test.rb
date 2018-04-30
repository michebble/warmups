require 'minitest/autorun'
require "minitest/reporters" # optional
Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new) # optional

require_relative 'blocks'

class BlockTest < MiniTest::Test
  
  def a_test
    result = can_make_word("A")
    assert_equals true , result 
  end
  def bark_test
    result = can_make_word("BARK")
    assert_equals true , result 
  end
  def book_test
    result = can_make_word("BOOK")
    assert_equals false , result
  end
  def treat_test
    result = can_make_word("TREAT")
    assert_equals true , result 
  end
  def common_test
    result = can_make_word("COMMON")
    assert_equals false , result
  end
  def squad_test
    result = can_make_word("SQUAD")
    assert_equals true , result 
  end
  def confuse_test
    result = can_make_word("CONFUSE")
    assert_equals true , result 
  end
  def bought_test
    result = can_make_word("BOUGHT")
    assert_equals false , result
  end
end