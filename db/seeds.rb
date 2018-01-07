require_relative 'comment_seeds';
require_relative 'caption_seeds';

#######
# USERS
#######

User.destroy_all;

ALL_USERS = [];

25.times do |num|
  user_fname = Faker::Name.unique.first_name
  user_lname = Faker::Name.last_name
  user_fullname = ["#{user_fname} #{user_lname}",
                    "#{user_fname.downcase}",
                    Faker::GameOfThrones.unique.character].sample
  prefix = ["hello_", "super_", "the_", "xoxo_"]
  user_uname = [
    Faker::Internet.user_name(["#{user_fname} #{user_lname}", "#{user_fname[0]} #{user_lname}"], ["_", "-"]),
    "#{user_fname}",
    "#{prefix.sample}#{user_fname}",
    "#{user_fname}#{user_lname}",
    "#{user_fname}#{rand(10)}",
    "x#{user_fname}x"].sample.downcase
  user_email = Faker::Internet.free_email("#{user_uname}")
  user_bio = [Faker::Simpsons.quote,
    Faker::Seinfeld.quote,
    Faker::Movie.quote,
    Faker::Internet.url('pxlgram.herokuapp.com', "/#/#{user_uname}")].sample[0..140]
  user_avatar = [Faker::LoremPixel.image,
                  Faker::LoremPixel.image,
                  Faker::Avatar.image,
                  nil].sample

  ALL_USERS.push(User.create!(username: user_uname, password: "password",
                fullname: user_fullname, email: user_email,
                bio: user_bio, avatar: user_avatar))
end

User.create!(username: 'admin', password: 'password123',
                fullname: 'administrator', email: 'admin@pxlgram.com',
                avatar: File.open('app/assets/images/monkey.png'),
                bio: 'I am the moderator here, thank you for checking out Pxlgram!')

ALL_USERS.concat([
  User.create!(username: 'friend', password: 'password',
                  fullname: 'pxlgram demo', email: 'friend@pxlgram.com',
                  avatar: File.open('app/assets/images/avatar.jpg'),
                  bio: "Welcome to your page! You can see all the photos that you've posted below!"),

  User.create!(username: 'kelbylu', password: 'password123',
                  fullname: 'Kelby Lu', email: 'kelbylu@pxlgram.com',
                  avatar: File.open('app/assets/images/kelby.jpg'),
                  bio: 'Thanks for stopping by!')
                  ])


#########
# PHOTOS
#########

Photo.destroy_all
PHOTO_IDS = []

(0..82).to_a.each do |num|
  new_photo = Photo.create!({
    author_id: ALL_USERS.sample.id,
    caption: ALL_PHOTO_CAPTIONS[num],
    created_at: Faker::Time.backward(180, :all),
    image: File.open("app/assets/images/seeds/pxl#{num}.jpg")
    })

  PHOTO_IDS.push(new_photo.id)
end

########
# LIKES
########

Like.destroy_all

ALL_USERS.each do |user|
  photo_ids_to_like = PHOTO_IDS.dup.shuffle!

  40.times do
    Like.create!(user_id: user.id, photo_id: photo_ids_to_like.pop)
  end
end

###########
# COMMENTS
###########

Comment.destroy_all

220.times do
  Comment.create!(user_id: ALL_USERS.sample.id,
    photo_id: PHOTO_IDS.sample,
    body: ALL_PHOTO_COMMENTS.sample)
end
