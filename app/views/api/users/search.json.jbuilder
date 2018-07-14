@users.each do |user|
  json.set! user.username do
    json.extract! user, :id, :username, :fullname
    json.avatarUrl asset_path(user.avatar.url)
  end
end
