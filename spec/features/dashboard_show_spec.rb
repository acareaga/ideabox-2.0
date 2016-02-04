require 'rails_helper'

describe 'dashboard show', js: true do
  it 'creates an idea and adds it to the index' do
    visit root_path

    page.fill_in 'idea-title', with: "Apple Computers"
    page.fill_in 'idea-body', with: "Let's start a computer company in the garage."

    click_button 'create-idea'
    sleep(2.second)

    expect(page).to have_content("Apple Computers")
    expect(page).to have_content("Lets start a computer company in the garage.")
  end

  xit 'deletes an idea from the index' do
    visit root_path

    page.fill_in 'idea-title', with: "Apple Computers"
    page.fill_in 'idea-body', with: "Let's start a computer company in the garage."

    click_button 'create-idea'

  end

  xit 'can update the title and body of an idea' do

  end

  xit 'truncates an idea body over 100 characters' do

  end

  xit 'can change the quality of an idea' do

  end
end
