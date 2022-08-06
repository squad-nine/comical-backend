const User = require("../models/userProfileModels");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;



const index = (req, res) => {
    User.find({}, (err, users) =>{
            if(err){
                res.status(400).json(err)
                return
            }
            res.json(users)
    })
}




async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json({message:'username/password incorrect'});
  }
}

function createJWT(user) {
    return jwt.sign(
        { user }, //this is the data payload
        SECRET,
        { expiresIn: "24h" }
        );
    }
    const showUser = (req, res) => {
      User.findById(req.params.id, (err, users) => {
        if (err) {
          res.status(400).json(err);
          return;
        }
      });
    };




module.exports = {
  signup,
  login,
  showUser,
  index
};
