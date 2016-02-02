class Seed
  def initialize
    generate_ideas
  end

  def generate_ideas
    idea_count = Idea.count
    5.times do |i|
        rand_num = rand(0..2)
        idea = Idea.create!(
          title: Faker::Hipster.words(2).join(' '),
          body: Faker::Hipster.words(8).join(' '),
          quality: rand_num
        )
      puts "Idea #{i}: #{idea.title} created!"
    end
  end
end

Seed.new
