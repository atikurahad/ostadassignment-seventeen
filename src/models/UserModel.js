const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

  firstName: { type: String , required: true },
  lastName: { type: String , required: true },
  email: { type: String , required: true, unique: true },
  password: { type: String , required: true },
  address: { type: String , required: false },
  phoneNumber: { type: String , required: false }

},

{ timestamps: true , versionKey: false});

const UserModel = mongoose.model("users", DataSchema);
module.exports = UserModel;