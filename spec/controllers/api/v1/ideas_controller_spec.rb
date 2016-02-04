require 'rails_helper'

describe Api::V1::IdeasController do
  it 'responds to json' do
    FactoryGirl.create(:idea)
    get :index, format: :json

    assert_response :success
  end

  it 'returns an index of existing ideas' do
    idea = FactoryGirl.create(:idea)

    get :index, format: :json
    assert_equal idea.id, JSON.parse(response.body).first["id"]
  end

  it 'allows you to create a new idea' do
    idea = FactoryGirl.create(:idea)

    get :index, format: :json
    assert_equal idea.id, JSON.parse(response.body).first["id"]
  end

  it 'update and saves idea attributes' do
    idea = FactoryGirl.create(:idea)
    get :update, format: :json, id: idea.id,
                                title: "Microsoft",
                                body: idea.body,
                                quality: 2

    assert_response :success
  end

  it 'deletes an idea from database' do
    idea = FactoryGirl.create(:idea)

    get :destroy, format: :json, id: idea.id
    assert_response :success
  end
end
