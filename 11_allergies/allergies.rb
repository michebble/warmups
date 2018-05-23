class Allergies
  ALLERGENS = {
    'eggs' => 1,
    'peanuts' => 2,
    'shellfish' => 4,
    'strawberries' => 8,
    'tomatoes' => 16,
    'chocolate' => 32,
    'pollen' => 64,
    'cats' => 128
    }

  def initialize(score)
    @patient_score = score
  end

  def allergic_to?(allergen)
    allergic?(ALLERGENS[allergen])
  end

  def list
    allergies = ALLERGENS.map do |allergen, allergen_id|
      allergen if allergic?(allergen_id)
    end
    allergies.compact
  end

  def allergic?(allergen)
    @patient_score & allergen != 0
  end
end
