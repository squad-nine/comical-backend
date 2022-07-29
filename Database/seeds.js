require('./connection')
const ComicBook = require('../models/comicBookModel')
const userProfile = require('../models/userProfileModels')
const {faker, Faker} = require('@faker-js/faker')
const { promiseImpl } = require('ejs')




const comicBooks = [
    {
    image: "https://comicvine.gamespot.com/a/uploads/scale_small/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
    issueNum: 13,
    name: "Chamber of Chills",
    published:'',
    condition:'',
    date: new Date()
},
{
    image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/17-1497-16-1-journey-into-mystery.jpg",
    issueNum: 3,
    name: "Journey into Mystery",
    published:'',
    condition:'',
    date: new Date()
  },
{
    image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/18-1433-17-1-spy-cases.jpg",
    issueNum: 13,
    name: "Spy Cases",
    published:'',
    condition:'',
    date: new Date()
  },
  {
    image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/22-989-23-1-blackhawk.jpg",
    issueNum: 57,
    name: "Blackhawk",
    published:'',
    condition:'',
    date: new Date()
  },
  {
    image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/30-1283-31-1-marvel-tales.jpg",
    issueNum: 109,
    name: "Marvel Tales",
    published:'',
    condition:'',
    date: new Date()
  },
  {
    image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/31-1423-32-1-battle.jpg",
    issueNum: 13,
    name: "Battle",
    published:'',
    condition:'',
    date: new Date()
  },
  {
    image: "https://comicvine.gamespot.com/a/uploads/scale_small/0/4/32-1172-33-1-lone-ranger-the.jpg",
    issueNum: 52,
    name: "The Lone Ranger",
    published:'',
    condition:'',
    date: new Date()
  }
]

const users = Array.from({ length: 10 }).map(() => ({
 username: faker.internet.userName(),
 email: faker.internet.email(),
 password: faker.internet.password()
}));



Promise.all([ComicBook.deleteMany({}), userProfile.deleteMany({})])
.then (()=> Promise.all([ComicBook.insertMany(comicBooks), userProfile.insertMany(users)]))
.then (([insertedcomicBooks, insertedUsers])=>{
  console.log(insertedcomicBooks, insertedUsers)
})
.catch(console.error)
.finally(()=>{
  process.exit()
})

// ComicBook.deleteMany({})
// .then( () => {
//     return ComicBook.insertMany(comicBooks)
// })
// .then((insertedcomicBooks)=>{
//     console.log(insertedcomicBooks)
// })
// .catch(err => console.error(err)),




