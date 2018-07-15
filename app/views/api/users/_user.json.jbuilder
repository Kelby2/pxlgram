json.extract! user, :id, :username, :fullname, :email, :bio
json.avatarUrl asset_path(user.avatar.url(:thumb))
json.photoIds user.photos.map(&:id)
json.followers user.followers.map(&:username)
json.followings user.followings.map(&:username)
