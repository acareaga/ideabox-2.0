class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def show
    respond_with Idea.find_by(idea_params)
  end

  def create
  end

  def update
  end

  def destroy
    idea = Idea.find_by(idea_params)
    idea.delete
    respond_with true
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
