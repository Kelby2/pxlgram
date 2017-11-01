# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create( name: 'Star Wars', name: 'Lord of the Rings'])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(username: 'admin', password: 'password', fullname: 'admin', email: 'admin@pxlgram.com', avatar: File.open('app/assets/images/kelby.jpg'))
User.create!(username: 'kelbylu', password: 'password', fullname: 'kelby', email: 'user2@pxlgram.com', avatar: File.open('app/assets/images/kelby.jpg'))
User.create!(username: 'taylorswift', password: 'password', fullname: 'taylor swift', email: 'user3@pxlgram.com', avatar: File.open('app/assets/images/taylor.jpg'))
User.create!(username: 'beyonce', password: 'password', fullname: 'beyonce knowles', email: 'user4@pxlgram.com', avatar: File.open('app/assets/images/beyonce.jpg'))
User.create!(username: 'jayz', password: 'password', fullname: 'shawn carter', email: 'user5@pxlgram.com', avatar: File.open('app/assets/images/jayz.jpg'))
User.create!(username: 'pixelgram', password: 'password', fullname: 'pxlg', email: 'user6@pxlgram.com')
User.create!(username: 'nike', password: 'password', fullname: 'nike', email: 'user7@pxlgram.com', avatar: File.open('app/assets/images/nike.jpg'))
User.create!(username: 'jlo', password: 'password', fullname: 'jennifer lopez', email: 'user8@pxlgram.com', avatar: File.open('app/assets/images/jayz.jpg'))
User.create!(username: 'kevinhart4real', password: 'password', fullname: 'kevin hart', email: 'user9@pxlgram.com', avatar: File.open('app/assets/images/kevinhart.jpg'))
User.create!(username: 'nba', password: 'password', fullname: 'national basketball association', email: 'user10@pxlgram.com', avatar: File.open('app/assets/images/nike.jpg'))
User.create!(username: 'kingjames', password: 'password', fullname: 'the king', email: 'user11@pxlgram.com', avatar: File.open('app/assets/images/cavs.png'))
User.create!(username: 'kobe', password: 'password', fullname: 'kobe bean bryant', email: 'user12@pxlgram.com', avatar: File.open('app/assets/images/lakers-ava.jpg'))
User.create!(username: 'ladygaga', password: 'password', fullname: 'stafani germanotta', email: 'user13@pxlgram.com')

Photo.destroy_all

Photo.create!(author: User.find_by(username: 'kelbylu'), caption: 'sourced from jayz ig', image: File.open('app/assets/images/jayz.jpg'))
Photo.create!(author: User.find_by(username: 'jayz'), caption: 'big duomo', image: File.open('app/assets/images/beyonce.jpg'))
Photo.create!(author: User.find_by(username: 'beyonce'), caption: 'sourced from beyonce ig', image: File.open('app/assets/images/jayz.jpg'))
Photo.create!(author: User.find_by(username: 'admin'), caption: 'the go to spot', image: File.open('app/assets/images/duomo.jpg'))
Photo.create!(author: User.find_by(username: 'admin'), caption: 'This will be a great photo', image: File.open('app/assets/images/cafe.jpg'))
Photo.create!(author: User.find_by(username: 'kelbylu'), caption: 'this is photo #7', image: File.open('app/assets/images/missing.jpg'))
Photo.create!(author: User.find_by(username: 'kobe'), caption: 'this is from beyonce ig', image: File.open('app/assets/images/lbj.jpg'))
Photo.create!(author: User.find_by(username: 'pixelgram'), caption: 'This will be a great photo', image: File.open('app/assets/images/monkey.jpg'))
Photo.create!(author: User.find_by(username: 'beyonce'), caption: 'This will be a great photo', image: File.open('app/assets/images/jayz.jpg'))
Photo.create!(author: User.find_by(username: 'beyonce'), caption: 'jayz put a ring on me', image: File.open('app/assets/images/jayz.jpg'))
Photo.create!(author: User.find_by(username: 'taylorswift'), caption: 'This will be a great photo', image: File.open('app/assets/images/taylor.jpg'))
