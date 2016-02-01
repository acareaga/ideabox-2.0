class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def show
    @idea = Idea.find_by(id: params[:id])
    respond_with @idea
  end

  def create
    respond_with Idea.create(idea_params)
  end

  def update
    respond_with Idea.update( params[:id], idea_params )
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
