class Comment < ApplicationRecord
  belongs_to :countdown

  validates :body, presence: true, length: { maximum: 255 }
  validates :name, presence: true, length: { maximum: 50 }
end
