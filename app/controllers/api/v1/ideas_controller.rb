class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def show
    respond_with Idea.find_by(idea_params)
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    respond_with Idea.update(params[:id], idea_params)
  end

  def destroy
    respond_with Idea.delete(params[:id]), nil
  end

  private

  def idea_params
    params.permit(:title, :body, :quality)
  end
end
