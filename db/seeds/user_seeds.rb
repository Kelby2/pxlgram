#######
# USERS
#######

User.destroy_all
USER_IDS = []

def create_username(fname, lname)
  username_styles = [
    "#{fname}",
    "mynameis#{fname}",
    "#{fname[0]}#{lname}",
    "hello_#{fname}",
    "#{fname}#{lname}",
    "#{fname}#{rand(20)}",
    Faker::Internet.user_name("#{fname} #{lname}", ["-", "_"]),
    Faker::GameOfThrones.unique.character,
  ]

  username_styles.sample.delete(" .,;:'\"!?").downcase
end

def generate_avatar
  "https://picsum.photos/250/?random"
end

def generate_quote
  [
    Faker::Simpsons.quote,
    Faker::Seinfeld.quote,
    Faker::Movie.quote,
    Faker::GameOfThrones.quote
  ].sample[0..140]
end

25.times do |num|
  user_fname = Faker::Name.unique.first_name
  user_lname = Faker::Name.last_name
  user_fullname = [
    "#{user_fname} #{user_lname}"
  ].sample
  user_username = create_username(user_fname, user_lname)
  user_email = Faker::Internet.free_email("#{user_username}")
  user_bio = generate_quote
  user_avatar = generate_avatar

  new_user = User.create!(username: user_username, password: "password",
                fullname: user_fullname, email: user_email,
                bio: user_bio, avatar: user_avatar)

  USER_IDS.push(new_user.id)
end

User.create!(username: 'admin', password: 'password123',
                fullname: 'administrator', email: 'admin@pxlgram.com',
                avatar: File.open('app/assets/images/monkey.png'),
                bio: 'I am the moderator here, thank you for checking out Pxlgram!'
)

USER_IDS.concat([
      User.create!(username: 'friend', password: 'password',
        fullname: 'pxlgram demo', email: 'friend@pxlgram.com',
        avatar: File.open('app/assets/images/avatar.jpg'),
        bio: "Welcome to your page! You can see all the photos that you've posted below!"
      ).id,

      User.create!(username: 'kelbylu', password: 'password123',
        fullname: 'Kelby Lu', email: 'kelby.lu28@gmail.com',
        avatar: File.open('app/assets/images/kelby.png'),
        bio: 'Thanks for checking out my site! Check out the github link above to see the source code or send me a message/connect on LinkedIn!'
      ).id,
    ])
