# Pxlgram

Live site: [Pxlgram](http://pxlgram.herokuapp.com)

Pxlgram is an single-paged photo sharing web-app inspired by Instagram. Built with Ruby on Rails on the backend, PostgreSQL database, and React.js with Redux framework on the frontend.

![Pxlgram](./app/assets/images/readme/pxlgram.gif)

## Features and Implementation

### User Search

Users are able to use the search bar to look for specific users by username. The search is implemented with with a custom debounce to reduce the number of queries sent to the database.

![Pxlgram](./app/assets/images/readme/search.gif)

### Photo Likes

On the photo feed index, users have the option to commend each photo with a like. Likes are limited to 1 per user on each photo, and can be created or removed by clicking the heart located right under the photo. Liking the photo will display a red heart to show the
current user that this photo has already been liked.

![LikeAndComment](./app/assets/images/readme/likecomment.gif)

### Photo Comments

Users can also choose to comment on each photo by selecting the designated text box. Clicking the chat bubble will also bring focus to the text box for that particular photo. Comments are submitted via the enter key, which will then add the comment immediately under the photo.

### Photo Upload

Users can upload their own photos to their profile through the upload button on the header bar. A
preview is displayed after they choose their photo with the file finder. Clicking the share button
will update the main feed as well as the user's profile with the selected photo.

![Upload](./app/assets/images/readme/upload.gif)

### User Follows

Users are able to follow other users so that their main page will only populate with photos from the users they are following. An explore page will be available to show photos from all users.

![Follows](./app/assets/images/readme/follow.gif)

## Future Directions for the Project

These are additional features that I would love to implement as the project continues:

* Incorporating video into the posts that the user uploads.

As you may be aware, Instagram allows their users to not only share photos, but video content as well, limited to <1min in length. Pxlgram currently has parameters set to only accept photo and gif uploads.

* Incorporate multiple uploads/content into a single post

Allowing users to upload a collection of photos/videos into one post. Users would then be able to scroll through the post to view the different photos in the collection.
