require 'rails_helper'

describe 'dashboard show', js: true do
  it 'creates an idea and adds it to the index' do
    visit root_path

    page.fill_in 'idea-title', with: "Apple Computers"
    page.fill_in 'idea-body', with: "Let's start a computer company in the garage."

    click_button 'create-idea'

    expect(page).to have_css("#idea-title")
    expect(page).to have_css("#idea-body")
  end

  it 'deletes an idea from the index' do
    visit root_path

    page.fill_in 'idea-title', with: "Apple Computers"
    page.fill_in 'idea-body', with: "Let's start a computer company in the garage."

    click_button 'create-idea'

    expect(page).to have_css("#delete-idea")
  end

  it 'can update the title and body of an idea' do
    visit root_path

    page.fill_in 'idea-title', with: "Apple Computers"
    page.fill_in 'idea-body', with: "Let's start a computer company in the garage."

    click_button 'create-idea'

    expect(page).to have_css("#idea-title")
    expect(page).to have_css("#idea-body")
  end

  it 'can change the quality of an idea' do
    visit root_path

    page.fill_in 'idea-title', with: "Apple Computers"
    page.fill_in 'idea-body', with: "Let's start a computer company in the garage."

    click_button 'create-idea'

    expect(page).to have_css(".increase-idea-quality")
    expect(page).to have_css(".decrease-idea-quality")
  end
end
