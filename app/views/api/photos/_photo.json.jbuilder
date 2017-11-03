json.extract! photo, :id, :author_id, :caption
json.imageUrl asset_path(photo.image.url)
json.likerIds photo.likers.map(&:id)
json.commentIds photo.comments.map(&:id)
json.commenterIds photo.commenters.map(&:id)
