@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :caption, :author_id
    json.author_name photo.author.username
    json.imageUrl asset_path(photo.image.url)
    json.likerIds photo.likers.map(&:id)

    json.commentIds photo.comments.map(&:id)
    json.commenterIds photo.commenters.map(&:id)

  end
end
