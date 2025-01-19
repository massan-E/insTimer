class Countdown < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :user, optional: true
end
