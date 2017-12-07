json.extract! photo, :id, :author_id, :caption

json.seconds_ago Time.now.minus_with_coercion(photo.created_at).round
json.author_name photo.author.username
json.author_avatar asset_path(photo.author.avatar.url)

json.likerIds photo.likers.map(&:id)

json.commentIds photo.comments.map(&:id)
json.commenterIds photo.commenters.map(&:id)

json.imageUrl asset_path(photo.image.url)
