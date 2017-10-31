json.extract! user, :id, :username, :fullname, :email
json.avatarUrl asset_path(user.avatar.url)

json.photoIds user.photos.map(&:id)
