const mongoose = require ('mongoose')

const userProfile = new mongoose.Schema ({
    username: String,
    email: String,
    password: String,
})

const Profile = mongoose.model('Profile', userProfile)


module.exports = Profile 