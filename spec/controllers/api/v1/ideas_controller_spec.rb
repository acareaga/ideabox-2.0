require 'rails_helper'

describe 'IdeasController' do
  xit 'responds to json' do
    FactoryGirl.create(:idea)
    get :index, format: :json

    assert_response :success
  end

  xit 'returns an index of existing ideas' do
    FactoryGirl.create_list(:idea, 10)

    get :index, format: :json
    assert_equal Idea.count, json_response.count
  end

  xit 'allows you to create a new idea' do
    FactoryGirl.create(:idea, title: "Microsoft", body: "Coding all day.")

    get :create, format: :json
    assert_equal
  end

  xit 'update and saves idea attributes' do
    idea = FactoryGirl.create(:idea)
    get :update, format: :json, id: idea.id,
                                title: "Microsoft",
                                body: idea.body,
                                quality: "Coding all day."

    assert_equal "Microsoft", json_response['title']
    assert_equal "Coding all day.", json_response['body']
  end

  xit 'deletes an idea from database' do
    idea = FactoryGirl.create(:idea)

    get :destroy, format: :json, id: idea.id
    refute_equal idea.id, json_response['id']
  end
end
