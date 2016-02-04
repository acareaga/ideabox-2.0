require 'rails_helper'

describe Idea do
  it "has a valid factory" do
    ideas = FactoryGirl.create_list(:idea, 20)
    idea = ideas.first

    expect(ideas.count).to eq(20)
    expect(idea.title).to eq("Apple Computers")
    expect(idea.body).to eq("Start a computer company in the garage.")
    expect(idea.quality).to eq("swill")
  end

  it "can only be created with valid attributes" do
    idea = FactoryGirl.create(:idea)
    expect(idea).to be_valid

    bad_idea = FactoryGirl.create(:idea)
    bad_idea.title = nil
    expect(bad_idea).to_not be_valid
  end

  it "has a default quality of the integer zero" do
    idea = FactoryGirl.create(:idea)
    expect(idea.quality).to eq("swill")
  end
end
