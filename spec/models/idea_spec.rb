require 'rails_helper'

describe Idea do
  it "has a valid factory" do
    ideas = FactoryGirl.create(:idea 20)
    idea = ideas.first

    expect(ideas.count).to eq("")
    expect(idea.title).to eq("Apple Computers")
    expect(idea.body).to eq("Start a computer company in the garage.")
    expect(idea.quality).to eq(0)
  end
end
