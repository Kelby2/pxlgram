@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :caption, :author_id
    json.author_name photo.author.username
    json.image_url asset_path(photo.image.url)
  end
end
