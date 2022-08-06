
# Comical-backend

This app will allow you to store your comic book collection on the Web!
This app will let you edit,delete,add comic books.
When adding comic books it will allow you to put the name, the date you obtained it, and condition of the comic book.
This will for comic book collectors if they want to keep track of their collection without the hassle of looking for the physical copy.
It will have server that will store the information for future reference
Users will be able to create profiles to store their comic book information and toggle them to be public or private
Users will be able to view other users profile without editing their comic books

# The purpose of this app
The reason why we made this app is to allow people to keep track of their comic books that they own and are able to view a short description of whenever they want to.


# MVP
- [x] User can sign up to create an account
- [x] User can login after making an account
- [x] User will be able to create a comic book collection
- [x] User will be able to view their comic book collection
- [x] User will be able to look at an individual comic book in their list and edit/delete


# Technologies used:


- JS / TS, MongoDB, Mongoose, Node.js, Express.js


Models and Properties

```js
comicBook = {
  name: String,
  published: String,
  condition: String,
  date: Number,
};

userProfile = {
  username: String,
  email: String,
  password: String,
};
```

# Stretch goals

- [] Being able to view other users pages
- [] Being able to set profile to public or private
- [] Being able to customize your profile i.e: profile picture,about me
- [x] Being able to click on the comic book that is attached to a link

## Scrum Master: Brandon Wenning

# Roles

## Front-end team:

- Will G. :CSS Styling/State management/floater
- Urvil P. :front-end routes/connecting front-end/back-end

## Back-end team:

- Chelsae D: MongoDB connections/models/Schemas/floater
- Brandon W: CRUD/Routes/back-end/Scrum Master/userauth