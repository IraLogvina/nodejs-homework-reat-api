

const fs = require('fs/promises');
const path = require('path');
const { User } = require('../../schema/user');
const sendSuccessRes = require('../../utils/sendSuccessRes');
const imageResize = require('../../utils/imageResize');

const updateIMG = async (req, res) => {
  const { _id, email, subscription } = req.user;
  const { originalname, path: oldPath } = req.file;

  const uploadPath = path.join(
    __dirname,
    '../../',
    'public/avatars',
    originalname,
  );

  const [extn, name] = originalname.split('.').reverse();
  const avatarURL = path.join('/avatars', `${name}-${_id}.${extn}`);

  try {
    await imageResize(oldPath, 250, 250);
    await fs.rename(oldPath, uploadPath);
    await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });
    sendSuccessRes(
      res,
      {
        user: { _id, email, subscription, avatarURL },
        message: 'Success',
      },
      200,
    );
  } catch (error) {
    await fs.unlink(oldPath);
  }
};
module.exports = updateIMG;