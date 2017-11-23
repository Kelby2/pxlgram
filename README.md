# Pxlgram

Live site: [Pxlgram](http://pxlgram.herokuapp.com)!

Pixelgram is an single-paged photo sharing web-app inspired by Instagram. Built with Ruby on Rails on the backend,
a PostgreSQL database, and React.js with Redux framework on the frontend.

## Features and Implementation

### Photo Upload

Users can upload their own photos to their profile through the upload button on the header bar. A
preview is displayed after they choose their photo with the file finder. Clicking the share button
will update the main feed as well as the user's profile with the selected photo.

### Photo Likes

On the main index page, users have the option to like on each photo.
Likes are limited to 1 per user on each photo, and can be created or destroyed by clicking the
heart under the photo. Liking the photo will display a red heart to show the
current user that this photo has already been liked.

### Photo Comments

Users can also choose to comment on each photo by selecting the designated
text box. Clicking the chat bubble will also bring focus to the text box for that
particular photo. Comments are submitted via the enter key, which will then add the
comment immediately under the photo.

## To Be Added

These are additional features that I would be adding to the project as time goes on:

### User Follows

Users will be able to follow other users so that their main page will only populate
with photos from the users they are following. An explore page will be available to
show photos from all users.

### User Search

Users will be able to use the search bar to look for specific users by name.
