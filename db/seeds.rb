# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

class Seed
  def initialize
    generate_ideas
  end

  def generate_ideas
    idea_count = Idea.count
    100.times do |i|
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
