const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

  user : { type: mongoose.Schema.Types.ObjectId , required: true , ref:"UserModel" },
  product : { type: mongoose.Schema.Types.ObjectId , required: true , ref:"ProductModel"},
  quantity : { type: Number , required: true , min: 1 }

},

{ timestamps: true , versionKey: false});

const CartModel = mongoose.model("carts", DataSchema);
module.exports = CartModel;