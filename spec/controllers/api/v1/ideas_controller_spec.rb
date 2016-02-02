require 'rails_helper'

describe 'index' do
  xit 'responds to json' do
    FactoryGirl.create(:idea)
    get :index, format: :json

    expect(response).to be_success
  end
end
