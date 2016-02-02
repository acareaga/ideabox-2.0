class Idea < ActiveRecord::Base
  validates :title, :body, :quality, presence: true
  default_scope -> { order(id: :desc) }
end
