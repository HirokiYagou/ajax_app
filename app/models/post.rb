class Post < ApplicationRecord
  has_one_attached :image

  def image_url
    image.attached? ? url_for(image) : nil
  end
end
