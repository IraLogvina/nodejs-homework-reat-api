const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../schema/user");
const { sendMail } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const image = gravatar.url(email);
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email=${email} already exist`);
  }
  const verificationToken = nanoid();
  const newUser = new User({ email, verificationToken, avatarURL: image });

  newUser.setPassword(password);

  await newUser.save();

  const mail = {
    to: email,
    subject: "Подтверждение регистрации",
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}">Нажмите для подтверждения email</a>`,
  };

  await sendMail(mail);

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Register success",
  });
};

module.exports = register;
