json.partial! '/api/photos/photo', photo: @photo

if (@width > 650)
  json.imageUrl asset_path(@photo.image.url(:resized))
else
  json.imageUrl asset_path(@photo.image.url)
end
