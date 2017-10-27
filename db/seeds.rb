# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!( {username: 'admin', password: 'password', fullname: 'admin', email: 'admin@pxlgram.com' })
User.create!( {username: 'kelbylu', password: 'password', fullname: 'kelby', email: 'admin@pxlgram.com' })
User.create!( {username: 'taylorswift', password: 'password', fullname: 'taylor swift', email: 'admin@pxlgram.com' })
User.create!( {username: 'beyonce', password: 'password', fullname: 'beyonce knowles', email: 'admin@pxlgram.com' })
User.create!( {username: 'jayz', password: 'password', fullname: 'shawn carter', email: 'admin@pxlgram.com' })
User.create!( {username: 'pixelgram', password: 'password', fullname: 'pxlg', email: 'admin@pxlgram.com' })
User.create!( {username: 'nike', password: 'password', fullname: 'nike', email: 'admin@pxlgram.com' })
User.create!( {username: 'jlo', password: 'password', fullname: 'jennifer lopez', email: 'admin@pxlgram.com' })
User.create!( {username: 'kevinhart4real', password: 'password', fullname: 'kevin hart', email: 'admin@pxlgram.com' })
User.create!( {username: 'nba', password: 'password', fullname: 'national basketball association', email: 'admin@pxlgram.com' })
User.create!( {username: 'kingjames', password: 'password', fullname: 'the king', email: 'admin@pxlgram.com' })
User.create!( {username: 'kobe', password: 'password', fullname: 'kobe bean bryant', email: 'admin@pxlgram.com' })
User.create!( {username: 'ladygaga', password: 'password', fullname: 'stafani germanotta', email: 'admin@pxlgram.com' })

Photo.destroy_all
