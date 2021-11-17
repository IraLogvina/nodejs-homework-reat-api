const currentUser = async (req, res, next) => {
    try {
      // const id = req.user._id;
      const {_id:id, name, email, subscription } = req.user;
      return res.status(200).json({
        status: "success",
        user: {
          id,
          name,
          email,
          subscription,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  module.exports = currentUser;