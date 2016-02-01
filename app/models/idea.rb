class Idea < ActiveRecord::Base
  validates :title, :body, :quality, presence: true
end
