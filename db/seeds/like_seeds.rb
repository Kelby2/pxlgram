########
# LIKES
########

Like.destroy_all

USER_IDS.each do |id|
  photo_ids_to_like = PHOTO_IDS.dup.shuffle!

  40.times do
    Like.create!(user_id: id, photo_id: photo_ids_to_like.pop)
  end
end
