# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create( name: 'Star Wars', name: 'Lord of the Rings'])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
20.times do |n|
  char_firstname = Faker::Name.unique.first_name
  char_lastname = Faker::Name.last_name
  char_fullname = "#{char_firstname} #{char_lastname}"
  User.create!(username: char_firstname.downcase, password: 'password',
                fullname: char_fullname, email: "user#{n}#{n}@pxlgram.com",
                bio: Faker::Simpsons.quote, avatar: Faker::LoremPixel.image)
end

25.times do |n|
  char_firstname = Faker::Name.unique.first_name
  char_lastname = Faker::Name.last_name
  char_fullname = "#{char_firstname} #{char_lastname}"
  User.create!(username: char_firstname.downcase, password: 'password',
                fullname: char_fullname, email: "user#{n}#{n}#{n}@pxlgram.com",
                bio: Faker::Simpsons.quote)
end



user1 = User.create!(username: 'admin', password: 'password', fullname: 'administrator', email: 'admin@pxlgram.com', avatar: File.open('app/assets/images/monkey.png'), bio: 'I am the moderator here, thank you for checking out pixelgram.')
user2 = User.create!(username: 'kelbylu', password: 'password', fullname: 'Kelby Lu', email: 'kelbylu@pxlgram.com', avatar: File.open('app/assets/images/kelby.jpg'), bio: 'Thanks for stopping by!')
user3 = User.create!(username: 'taylorswift', password: 'password', fullname: 'Taylor Swift', email: 'taylorswift@pxlgram.com', avatar: File.open('app/assets/images/taylor.jpg'), bio: 'This is the new me. The old me is dead.')
user3 = User.create!(username: 'beyonce', password: 'password', fullname: 'Beyonce Knowles', email: 'beyonce@pxlgram.com', avatar: File.open('app/assets/images/beyonce.jpg'), bio: '#LEmONAdE')
user4 = User.create!(username: 'jayz', password: 'password', fullname: 'Shawn Carter', email: 'jayz@pxlgram.com', avatar: File.open('app/assets/images/jayz.jpg'), bio: '4:44, check it out, FAM.')
user5 = User.create!(username: 'pxlg', password: 'password', fullname: 'Pxlgram', email: 'pxlg@pxlgram.com', bio: 'Welcome to pxlgram!', avatar: File.open('app/assets/images/logo.png'))
user6 = User.create!(username: 'nike', password: 'password', fullname: 'Just Do It', email: 'nike@pxlgram.com', avatar: File.open('app/assets/images/nike.jpg'))
user7 = User.create!(username: 'jlo', password: 'password', fullname: 'Jennifer Lopez', email: 'jlo@pxlgram.com', avatar: File.open('app/assets/images/jayz.jpg'), bio: 'from around the block.')
user8 = User.create!(username: 'kevinhart4real', password: 'password', fullname: 'Kevin Hart', email: 'kevinhart4real@pxlgram.com', avatar: File.open('app/assets/images/kevinhart.jpg'), bio: 'Hey hey hey, check me out. Live, love & laugh')
user9 = User.create!(username: 'nba', password: 'password', fullname: 'National Basketball Association', email: 'nba@pxlgram.com', avatar: File.open('app/assets/images/nike.jpg'))
user10 = User.create!(username: 'kingjames', password: 'password', fullname: 'Lebron Raymone James', email: 'kingjames@pxlgram.com', avatar: File.open('app/assets/images/cavs.png'), bio: '#23')
user11 = User.create!(username: 'kobe', password: 'password', fullname: 'Kobe Bean Bryant', email: 'kobe@pxlgram.com', avatar: File.open('app/assets/images/lakers-ava.jpg'), bio: "Publisher, Investor, Producer. I produce points.")
user12 = User.create!(username: 'friend', password: 'password', fullname: 'guest user', email: 'friend@pxlgram.com', avatar: File.open('app/assets/images/avatar.jpg'), bio: "Welcome to your page! You can see all the photos that you've posted below! They're lookin great!")

Photo.destroy_all

photo1 = Photo.create!(author: User.find_by(username: 'beyonce'), image: File.open('app/assets/images/jayz.jpg'), caption: "We get it done, this image was taken from Shawn's instagram")
photo2 = Photo.create!(author: User.find_by(username: 'jayz'), image: File.open('app/assets/images/beyonce.jpg'), caption: "The Bonnie to my Clyde, taken from Bey's intsta")
photo3 = Photo.create!(author: User.find_by(username: 'kelbylu'), image: File.open('app/assets/images/duomo.png'), caption: 'We out here at the Duomo! @Milan')
photo4 = Photo.create!(author: User.find_by(username: 'admin'), image: File.open('app/assets/images/cafe.jpg'), caption: 'The go to spot')
photo5 = Photo.create!(author: User.find_by(username: 'kobe'), caption: "This guy is comin' up!", image: File.open('app/assets/images/lbj.jpg'))
photo5 = Photo.create!(author: User.find_by(username: 'kobe'), caption: "Laker Nation, it's been a long time, fam. Time for me to hang it up.", image: File.open('app/assets/images/lakers-ava.jpg'))
photo6 = Photo.create!(author: User.find_by(username: 'pxlg'), image: File.open('app/assets/images/monkey.png'))
photo7 = Photo.create!(author: User.find_by(username: 'kelbylu'), image: File.open('app/assets/images/jayz.jpg'), caption: "The Empire State Of Mind, this image was taken from Shawn's instagram")
photo8 = Photo.create!(author: User.find_by(username: 'taylorswift'), caption: 'The new new', image: File.open('app/assets/images/taylor.jpg'))
photo9 = Photo.create!(author: User.find_by(username: 'kelbylu'), caption: 'TSwizzle', image: File.open('app/assets/images/taylor.jpg'))
photo10 = Photo.create!(author: User.find_by(username: 'kobe'), caption: "Everyday, we hustle", image: File.open('app/assets/images/bball.jpg'))
photo11 = Photo.create!(author: User.find_by(username: 'kobe'), caption: "The game doesn't wait for anyone", image: File.open('app/assets/images/bball2.jpg'))
photo12 = Photo.create!(author: User.find_by(username: 'friend'), caption: "I want these new shoes", image: File.open('app/assets/images/nike2.jpg'))
photo13 = Photo.create!(author: User.find_by(username: 'nba'), caption: "Just do it", image: File.open('app/assets/images/lbj.jpg'))
photo14 = Photo.create!(author: User.find_by(username: 'pxlg'), caption: "We are a clone of the big boys", image: File.open('app/assets/images/instagram.jpg'))
photo15 = Photo.create!(author: User.find_by(username: 'pxlg'), caption: "We're the better version though", image: File.open('app/assets/images/instagram2.jpg'))
photo16 = Photo.create!(author: User.find_by(username: 'pxlg'), caption: "Join us today!", image: File.open('app/assets/images/instagram3.jpg'))
photo17 = Photo.create!(author: User.find_by(username: 'admin'), caption: "We are a clone of the big boys", image: File.open('app/assets/images/instagram.jpg'))
photo18 = Photo.create!(author: User.find_by(username: 'friend'), caption: "This is so good!", image: File.open('app/assets/images/macaroons.jpg'))
photo19 = Photo.create!(author: User.find_by(username: 'nike'), caption: "Just do it", image: File.open('app/assets/images/nike2.jpg'))
photo20 = Photo.create!(author: User.find_by(username: 'nike'), caption: "Cop these new shoes, available at your local store", image: File.open('app/assets/images/nike3.jpg'))
photo21 = Photo.create!(author: User.find_by(username: 'nike'), caption: "This the good stuff", image: File.open('app/assets/images/nike4.jpg'))
photo22 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Top of the world kinda feeling", image: File.open('app/assets/images/bliss.jpg'))
photo23 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Something about this wall...", image: File.open('app/assets/images/brickwall.jpg'))
photo24 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Keep your head up!", image: File.open('app/assets/images/lookup.jpg'))
photo25 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Woke up early to get this photo", image: File.open('app/assets/images/brooklynbridge.jpg'))
photo26 = Photo.create!(author: User.find_by(username: 'friend'), caption: "Candid AF", image: File.open('app/assets/images/girl.jpg'))

Like.destroy_all


(1..15).each do |photo_id|
  Like.create!(user_id: user1.id, photo_id: photo_id)
  Like.create!(user_id: user2.id, photo_id: photo_id)
  Like.create!(user_id: user3.id, photo_id: photo_id)
end

(8..26).each do |photo_id|
  Like.create!(user_id: user6.id, photo_id: photo_id)
  Like.create!(user_id: user7.id, photo_id: photo_id)
  Like.create!(user_id: user8.id, photo_id: photo_id)
end

(6..18).each do |photo_id|
  Like.create!(user_id: user9.id, photo_id: photo_id)
  Like.create!(user_id: user10.id, photo_id: photo_id)
  Like.create!(user_id: user11.id, photo_id: photo_id)
  Like.create!(user_id: user4.id, photo_id: photo_id)
  Like.create!(user_id: user5.id, photo_id: photo_id)
  Like.create!(user_id: User.find(2).id, photo_id: photo_id)
end
