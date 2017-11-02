json.extract! photo, :author_id, :caption, :author
json.imageUrl asset_path(photo.image.url)
json.likeIds photo.likes.map(&:id)
