require 'rails_helper'

describe 'index' do
  context 'when idea is searched' do
    xit 'returns the idea and its details on the same page' do
      get :index

      expect(response).to be_success
    end
  end
end
