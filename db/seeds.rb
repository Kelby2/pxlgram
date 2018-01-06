require_relative 'comment_seeds';

#######
# USERS
#######

User.destroy_all;

ALL_USERS = [];

15.times do |num|
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
    "#{user_fname}#{suffix.sample}"].sample.downcase
  user_email = "pxlgramuser#{num}@pxlgram.com"
  user_bio = [Faker::Simpsons.quote, Faker::Seinfeld.quote].sample[0..140]

  ALL_USERS.push(User.create!(username: user_uname, password: "password",
                fullname: user_fullname, email: user_email,
                bio: user_bio, avatar: Faker::Avatar.image(nil, "150x150")))
end

10.times do |num|
  user_fname = Faker::Name.unique.first_name
  user_lname = Faker::Name.last_name
  user_fullname = "#{user_fname} #{user_lname}"
  user_uname = "#{user_fname}".downcase
  user_email = "pxlguser#{num}@pxlgram.com"
  user_bio = Faker::Movie.quote[0..140]

  ALL_USERS.push(User.create!(username: user_uname, password: 'password',
                  fullname: user_fullname, email: user_email,
                  bio: user_bio))
end

ALL_USERS.concat([
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
                  ])


#########
# PHOTOS
#########

Photo.destroy_all

PHOTO_CAPS = [
  "The game doesn't wait for anyone",
  "You're next",
  "the bees knees",
  "Candid AF",
  "nothing beats some good ole avocado egg toast",
  "Smash",
  "Woke up early to get this photo",
  "The go to spot",
  "The new new",
  "Achievement unlocked: AMNY Friday crossword puzzle",
  "DUOMO, MILAN!",
  "Everyday, we hustlin",
  "Am I hipster yet?",
  "Just do it",
  "Defend the LAND",
  "Keep your head up!",
  "YUM!",
  "In the moment...",
  "Got me some new Jordans",
  "I want these shoes...",
  "Flyknit Racers lookin' good",
  "Sup?",
  "Never settle, #1",
  "Beautiful",
  "crème",
  "Found this relic walking downtown today!",
  "*~NYC~*",
  "Reach for the stars",
  "hands down the best cookies on planet earth",
  "Waiting for his treat",
  "Down Under the Manhattan Bridge Overpass",
  "Tower Eifel, Paris",
  "Bougie brunchin #brunch",
  "😏",
  "probably one of the prettiest things i've ever seen",
  "raise your hand if you're happy",
  "Sunday mornings",
  "the Hanji river",
  "never settle",
  "cool and scary at the same time 🔥👀",
  "views from the window seat",
  "the US of A, my friends",
  "home",
  "prepared a nice breakfast for my boyfriend and I today. 😏",
  "the old stomping grounds",
  "This the good stuff",
  "Got me feelin some kinda way",
  "stay floatin",
  "study sesh at The Local! #grind",
  "got myself some new succulents today! ❤️",
  "da boyz 🔥",
  "it took me longer than I am willing to admit to set up this photo 😂 #thatlightingdoe",
  "👀 👀",
  "not sure how I feel about this one",
  "what're you looking at?",
  "my go to coffee 🔥",
  "autumn is upon us! 😊😊😊",
  "The new occulus down by the old WTC #beauty",
  "😑",
  "They got me... #applelife",
  "zoom zoom"
  "The Tube, 1am",
  "Bruh 😂😂😂 #burgers #letsgo #foodporn",
  "👀",
  "winners never quit ⭐",
  "❤️",
  "favorite time of year",
  "what am I doing here ... 😂",
  "bucket list: capilano bridge ✅ #vancouver #ahh",
  "🤘🏽🤘",
  "don't let the journey end",
  "A few of my favorites 😍",
  "❤️",
  "Don't mind if I do",
  "eat sleep ball repeat #life",
  "[insert thought-provoking caption]",
  "goodreads",
  "❤️",
  "this damn city never sleeps",
  "no filter 🔥",
  "the time my best friend and I borrowed a shopping cart and rode around town 😂😂😂",
  "😊",
  "take the road less traveled",
  "taken with my galaxy S8",
  "I spy",
  "low key feelin my outfit today 🔥🔥🔥"
]

(1..82).to_a.each do |num|
  new_photo = Photo.create({
    author_id: ALL_USERS.sample.id,
    caption: PHOTO_CAPS[num],
    image: File.open("app/assets/images/seeds/pxl#{num}")
    })
end
#
Like.destroy_all

ALL_USERS.each do |user|
  
