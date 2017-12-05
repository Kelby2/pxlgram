@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :photo_id, :body
    json.author_name comment.user.username
  end
end
