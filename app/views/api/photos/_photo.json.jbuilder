json.extract! photo, :id, :author_id, :caption, :created_at

json.author_name photo.author.username
json.author_avatar asset_path(photo.author.avatar.url)

json.likers photo.likers.map(&:username)

json.commentIds photo.comments.map(&:id)
json.commenterIds photo.commenters.map(&:id)

json.imageUrl asset_path(photo.image.url)
