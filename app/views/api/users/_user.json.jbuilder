json.extract! user, :id, :username, :fullname, :email, :bio
json.avatarUrl asset_path(user.avatar.url(:thumb))
json.photoIds user.photos.map(&:id)
