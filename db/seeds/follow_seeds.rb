Following.destroy_all

USER_IDS.each do |id|

  users_to_follow = USER_IDS.dup.reject { |uid| uid == id }.shuffle!
  (8..20).to_a.sample.times do
    Following.create!(follower_id: id, followee_id: users_to_follow.pop)
  end

end
