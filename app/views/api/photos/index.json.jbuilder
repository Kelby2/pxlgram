@photos.each do |photo|
  json.set! photo.id do
    json.partial! '/api/photos/photo', photo: photo
    json.imageUrl asset_path(photo.image.url)
  end
end
