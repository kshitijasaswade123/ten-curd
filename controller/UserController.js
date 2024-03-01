const user = require("../model/userModel.js");

exports.getdata = async (req, res) => {
  try {
    const data = await user.find();
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};

exports.postData = async (req, res) => {
  try {
    const data = await user.create(req.body);
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};

exports.putData = async (req, res) => {
  try {
    const data = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const data = await user.findByIdAndDelete(req.params.id);
    return res.json({
      errors: false,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      errors: true,
      message: error.message,
    });
  }
};
