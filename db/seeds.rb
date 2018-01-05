# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create( name: 'Star Wars', name: 'Lord of the Rings'])
#   Character.create(name: 'Luke', movie: movies.first)


#######
# USERS
#######

User.destroy_all;

ALL_USERS = [];

25.times do |num|
  user_fname = Faker::Name.unique.first_name
  user_lname = Faker::Name.last_name
  user_fullname = "#{user_fname} #{user_lname}"
  prefix = ["heyits", "hello", "super", "the", "xoxo"]
  suffix = ["theGreat", "#{rand(10)}"]
  user_uname = ["#{user_fname}",
    "#{user_fname}.#{user_lname}",
    "#{user_fname}_#{user_lname}",
    "#{prefix.sample}#{user_fname}",
    "#{user_fname}#{user_lname}",
    "#{user_fname}#{suffix.sample}"].sample
  user_email = "pxlgramuser#{num}@pxlgram.com"
  user_bio = [Faker::Simpsons.quote, Faker::Seinfeld.quote].sample[0..140]

  ALL_SEED_USERS.push(User.create!(username: user_uname, password: "password",
                fullname: user_fullname, email: user_email,
                bio: user_bio, avatar: Faker::Avatar.image(nil, "150x150")))
end

20.times do |num|
  user_fname = Faker::Name.unique.first_name
  user_lname = Faker::Name.last_name
  user_fullname = "#{user_fname} #{user_lname}"
  user_uname = "#{user_fname}"
  user_email = "pxlguser#{num}@pxlgram.com"
  user_bio = Faker::Movie.quote[0..140]

  ALL_SEED_USERS.push(User.create!(username: user_uname, password: 'password',
                  fullname: user_fullname, email: user_email,
                  bio: user_bio))
end

ALL_SEED_USERS.concat(
  User.create!(username: 'friend', password: 'password',
                  fullname: 'guest', email: 'friend@pxlgram.com',
                  avatar: File.open('app/assets/images/avatar.jpg'),
                  bio: "Welcome to your page! You can see all the photos that you've posted below! They're lookin great!"),

  User.create!(username: 'admin', password: 'password',
                  fullname: 'administrator', email: 'admin@pxlgram.com',
                  avatar: File.open('app/assets/images/monkey.png'),
                  bio: 'I am the moderator here, thank you for checking out pixelgram.'),

  User.create!(username: 'kelbylu', password: 'password',
                  fullname: 'Kelby Lu', email: 'kelbylu@pxlgram.com',
                  avatar: File.open('app/assets/images/kelby.jpg'),
                  bio: 'Thanks for stopping by!')
                  )


#########
# PHOTOS
#########

Photo.destroy_all

# photo1 = Photo.create!(author: User.find_by(username: 'beyonce'), image: File.open('app/assets/images/jayz.jpg'), caption: "We get it done, this image was taken from Shawn's instagram")
# photo2 = Photo.create!(author: User.find_by(username: 'jayz'), image: File.open('app/assets/images/beyonce.jpg'), caption: "The Bonnie to my Clyde, taken from Bey's intsta")
# photo3 = Photo.create!(author: User.find_by(username: 'kelbylu'), image: File.open('app/assets/images/duomo.png'), caption: 'We out here at the Duomo! @Milan')
# photo4 = Photo.create!(author: User.find_by(username: 'admin'), image: File.open('app/assets/images/cafe.jpg'), caption: 'The go to spot')
# photo5 = Photo.create!(author: User.find_by(username: 'kobe'), caption: "This guy is comin' up!", image: File.open('app/assets/images/lbj.jpg'))
# photo5 = Photo.create!(author: User.find_by(username: 'kobe'), caption: "Laker Nation, it's been a long time, fam. Time for me to hang it up.", image: File.open('app/assets/images/lakers-ava.jpg'))
# photo6 = Photo.create!(author: User.find_by(username: 'pxlg'), image: File.open('app/assets/images/monkey.png'))
# photo7 = Photo.create!(author: User.find_by(username: 'kelbylu'), image: File.open('app/assets/images/jayz.jpg'), caption: "The Empire State Of Mind, this image was taken from Shawn's instagram")
# photo8 = Photo.create!(author: User.find_by(username: 'taylorswift'), caption: 'The new new', image: File.open('app/assets/images/taylor.jpg'))
# photo9 = Photo.create!(author: User.find_by(username: 'kelbylu'), caption: 'TSwizzle', image: File.open('app/assets/images/taylor.jpg'))
# photo10 = Photo.create!(author: User.find_by(username: 'kobe'), caption: "Everyday, we hustle", image: File.open('app/assets/images/bball.jpg'))
# photo11 = Photo.create!(author: User.find_by(username: 'kobe'), caption: "The game doesn't wait for anyone", image: File.open('app/assets/images/bball2.jpg'))
# photo12 = Photo.create!(author: User.find_by(username: 'friend'), caption: "I want these new shoes", image: File.open('app/assets/images/nike2.jpg'))
# photo13 = Photo.create!(author: User.find_by(username: 'nba'), caption: "Just do it", image: File.open('app/assets/images/lbj.jpg'))
# photo14 = Photo.create!(author: User.find_by(username: 'pxlg'), caption: "We are a clone of the big boys", image: File.open('app/assets/images/instagram.jpg'))
# photo15 = Photo.create!(author: User.find_by(username: 'pxlg'), caption: "We're the better version though", image: File.open('app/assets/images/instagram2.jpg'))
# photo16 = Photo.create!(author: User.find_by(username: 'pxlg'), caption: "Join us today!", image: File.open('app/assets/images/instagram3.jpg'))
# photo17 = Photo.create!(author: User.find_by(username: 'admin'), caption: "Pastel season is upon us!", image: File.open('app/assets/images/instagram.jpg'))
# photo18 = Photo.create!(author: User.find_by(username: 'friend'), caption: "This is so good!", image: File.open('app/assets/images/macaroons.jpg'))
# photo19 = Photo.create!(author: User.find_by(username: 'nike'), caption: "Just do it", image: File.open('app/assets/images/nike2.jpg'))
# photo20 = Photo.create!(author: User.find_by(username: 'nike'), caption: "Cop these new shoes, available at your local store", image: File.open('app/assets/images/nike3.jpg'))
# photo21 = Photo.create!(author: User.find_by(username: 'nike'), caption: "This the good stuff", image: File.open('app/assets/images/nike4.jpg'))
# photo22 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Top of the world kinda feeling", image: File.open('app/assets/images/bliss.jpg'))
# photo23 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Something about this wall...", image: File.open('app/assets/images/brickwall.jpg'))
# photo24 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Keep your head up!", image: File.open('app/assets/images/lookup.jpg'))
# photo25 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Woke up early to get this photo", image: File.open('app/assets/images/brooklynbridge.jpg'))
# photo26 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Candid AF", image: File.open('app/assets/images/girl.jpg'))
# 
# Like.destroy_all
#
#
# (1..15).each do |photo_id|
#   Like.create!(user_id: user1.id, photo_id: photo_id)
#   Like.create!(user_id: user2.id, photo_id: photo_id)
#   Like.create!(user_id: user3.id, photo_id: photo_id)
# end
#
# (8..26).each do |photo_id|
#   Like.create!(user_id: user6.id, photo_id: photo_id)
#   Like.create!(user_id: user7.id, photo_id: photo_id)
#   Like.create!(user_id: user8.id, photo_id: photo_id)
# end
#
# (6..18).each do |photo_id|
#   Like.create!(user_id: user9.id, photo_id: photo_id)
#   Like.create!(user_id: user10.id, photo_id: photo_id)
#   Like.create!(user_id: user11.id, photo_id: photo_id)
#   Like.create!(user_id: user4.id, photo_id: photo_id)
#   Like.create!(user_id: user5.id, photo_id: photo_id)
#   Like.create!(user_id: User.find(2).id, photo_id: photo_id)
# end
