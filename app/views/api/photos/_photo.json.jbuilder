json.extract! photo, :id, :author_id, :caption, :author
json.imageUrl asset_path(photo.image.url)
json.likerIds photo.likers.map(&:id)
