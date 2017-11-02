# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create( name: 'Star Wars', name: 'Lord of the Rings'])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(username: 'admin', password: 'password', fullname: 'administrator', email: 'admin@pxlgram.com', avatar: File.open('app/assets/images/monkey.jpg'), bio: 'I am the moderator here, thank you for checking out pixelgram.')
User.create!(username: 'kelbylu', password: 'password', fullname: 'kelby lu', email: 'user2@pxlgram.com', avatar: File.open('app/assets/images/kelby.jpg'), bio: 'Thanks for stopping by!')
User.create!(username: 'taylorswift', password: 'password', fullname: 'taylor swift', email: 'user3@pxlgram.com', avatar: File.open('app/assets/images/taylor.jpg'), bio: 'This is the new me. The old me is dead.')
User.create!(username: 'beyonce', password: 'password', fullname: 'beyonce knowles', email: 'user4@pxlgram.com', avatar: File.open('app/assets/images/beyonce.jpg'), bio: '#LEmONAdE')
User.create!(username: 'jayz', password: 'password', fullname: 'shawn carter', email: 'user5@pxlgram.com', avatar: File.open('app/assets/images/jayz.jpg'), bio: '4:44, check it out, FAM.')
User.create!(username: 'pxlg', password: 'password', fullname: 'pxlgram', email: 'user6@pxlgram.com', bio: 'Welcome to pxlgram!', avatar: File.open('app/assets/images/pxlgram_logo.jpg'))
User.create!(username: 'nike', password: 'password', fullname: 'just do it', email: 'user7@pxlgram.com', avatar: File.open('app/assets/images/nike.jpg'))
User.create!(username: 'jlo', password: 'password', fullname: 'jennifer lopez', email: 'user8@pxlgram.com', avatar: File.open('app/assets/images/jayz.jpg'), bio: 'from around the block.')
User.create!(username: 'kevinhart4real', password: 'password', fullname: 'kevin hart', email: 'user9@pxlgram.com', avatar: File.open('app/assets/images/kevinhart.jpg'), bio: 'Hey hey hey, check me out. Live, love & laugh')
User.create!(username: 'nba', password: 'password', fullname: 'national basketball association', email: 'user10@pxlgram.com', avatar: File.open('app/assets/images/nike.jpg'))
User.create!(username: 'kingjames', password: 'password', fullname: 'the king', email: 'user11@pxlgram.com', avatar: File.open('app/assets/images/cavs.png'), bio: '#23')
User.create!(username: 'kobe', password: 'password', fullname: 'kobe bean bryant', email: 'user12@pxlgram.com', avatar: File.open('app/assets/images/lakers-ava.jpg'), bio: "Publisher, Investor, Producer. I produce points.")

Photo.destroy_all

Photo.create!(author: User.find_by(username: 'beyonce'), image: File.open('app/assets/images/jayz.jpg'), caption: 'We get it done')
Photo.create!(author: User.find_by(username: 'beyonce'), image: File.open('app/assets/images/jayz.jpg'), caption: "We get it done, this image was taken from Shawn's instagram")
Photo.create!(author: User.find_by(username: 'beyonce'), image: File.open('app/assets/images/jayz.jpg'), caption: 'He put on a ring on me')
Photo.create!(author: User.find_by(username: 'kelby'), image: File.open('app/assets/images/jayz.jpg'), caption: "The Empire State Of Mind, this image was taken from Shawn's instagram")
Photo.create!(author: User.find_by(username: 'jayz'), image: File.open('app/assets/images/beyonce.jpg'), caption: "The Bonnie to my Clyde, taken from Bey's intsta")
Photo.create!(author: User.find_by(username: 'kelby'), image: File.open('app/assets/images/duomo.png'), caption: 'We out here at the Duomo! @Milan')
Photo.create!(author: User.find_by(username: 'admin'), image: File.open('app/assets/images/cafe.jpg'), caption: 'The go to spot')
Photo.create!(author: User.find_by(username: 'kobe'), caption: "This guy is comin' up!", image: File.open('app/assets/images/lbj.jpg'))
Photo.create!(author: User.find_by(username: 'kobe'), caption: "Laker Nation, it's been a long time, fam. Time for me to hang it up.", image: File.open('app/assets/images/lakers-ava.jpg'))
Photo.create!(author: User.find_by(username: 'pixelgram'), image: File.open('app/assets/images/monkey.jpg'))
Photo.create!(author: User.find_by(username: 'taylorswift'), caption: 'The new new', image: File.open('app/assets/images/taylor.jpg'))
Photo.create!(author: User.find_by(username: 'kelbylu'), caption: 'TSwizzle', image: File.open('app/assets/images/taylor.jpg'))
