const bcrypt = require("bcrypt");
const { User } = require("../model/userModel");

exports.register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("This user already exists.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      email: req.body.email,
    });

    await newUser.save();
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.GETregister =async(req, res) => {
  User.find({}).then(function (users) {
    res.send(users);
    });
}