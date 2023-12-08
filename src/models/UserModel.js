const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    address: { type: String, require: false },
    phoneNumber: { type: String, require: false },
  },
  { timestaps: true, versonkey: false }
);

const UserModel = mongoose.model("users", UserModel);

module.exports = UserModel;
