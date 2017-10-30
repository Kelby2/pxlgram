# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create( name: 'Star Wars', name: 'Lord of the Rings'])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(username: 'admin', password: 'password', fullname: 'admin', email: 'admin@pxlgram.com')
User.create!(username: 'kelbylu', password: 'password', fullname: 'kelby', email: 'user2@pxlgram.com')
User.create!(username: 'taylorswift', password: 'password', fullname: 'taylor swift', email: 'user3@pxlgram.com')
User.create!(username: 'beyonce', password: 'password', fullname: 'beyonce knowles', email: 'user4@pxlgram.com')
User.create!(username: 'jayz', password: 'password', fullname: 'shawn carter', email: 'user5@pxlgram.com')
User.create!(username: 'pixelgram', password: 'password', fullname: 'pxlg', email: 'user6@pxlgram.com')
User.create!(username: 'nike', password: 'password', fullname: 'nike', email: 'user7@pxlgram.com')
User.create!(username: 'jlo', password: 'password', fullname: 'jennifer lopez', email: 'user8@pxlgram.com')
User.create!(username: 'kevinhart4real', password: 'password', fullname: 'kevin hart', email: 'user9@pxlgram.com')
User.create!(username: 'nba', password: 'password', fullname: 'national basketball association', email: 'user10@pxlgram.com')
User.create!(username: 'kingjames', password: 'password', fullname: 'the king', email: 'user11@pxlgram.com')
User.create!(username: 'kobe', password: 'password', fullname: 'kobe bean bryant', email: 'user12@pxlgram.com')
User.create!(username: 'ladygaga', password: 'password', fullname: 'stafani germanotta', email: 'user13@pxlgram.com')

Photo.destroy_all

Photo.create!(author_id: 2, caption: 'sourced from jayz ig', image: File.open('app/assets/images/jayz.jpg'))
Photo.create!(author_id: 3, caption: 'big duomo', image: File.open('app/assets/images/duomo.png'))
Photo.create!(author_id: 4, caption: 'sourced from beyonce ig', image: File.open('app/assets/images/beyonce.jpg'))
Photo.create!(author_id: 5, caption: 'the go to spot', image: File.open('app/assets/images/cafe.png'))
Photo.create!(author_id: 6, caption: 'This will be a great photo', image: File.open('app/assets/images/default.png'))
Photo.create!(author_id: 7, caption: 'this is photo #7', image: File.open('app/assets/images/missing.png'))
Photo.create!(author_id: 8, caption: 'this is from beyonce ig', image: File.open('app/assets/images/jayz.jpg'))
Photo.create!(author_id: 9, caption: 'This will be a great photo', image: File.open('app/assets/images/missing.png'))
Photo.create!(author_id: 10, caption: 'This will be a great photo', image: File.open('app/assets/images/cafe.png'))
Photo.create!(author_id: 11, caption: 'jayz put a ring on me', image: File.open('app/assets/images/beyonce.jpg'))
Photo.create!(author_id: 3, caption: 'This will be a great photo', image: File.open('app/assets/images/duomo.png'))
