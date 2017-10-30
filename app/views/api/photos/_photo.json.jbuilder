json.extract! photo, :author_id, :caption, :author
json.image_url asset_path(photo.image.url)
