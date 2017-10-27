@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :author_id, :caption
  end
end
