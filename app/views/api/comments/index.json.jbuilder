@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :photo_id, :body
    json.author comment.user.username
  end
end
