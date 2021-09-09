const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const trainerSchema = mongoose.Schema(
  {
    fname:{
      type:String,
      required:true,
  },
  lname:{
      type:String,
      required:true,
  },
  isAdmin:{
      type:Boolean,
      required:true,
      default:false
  },
  username:{
      type:String,
      required:true,
  },
  nic:{
      type:String,
      required:true,
  },
  dob:{
      type:String,
      required:true,
  },
  gender:{
      type:String,
      required:true,
  },
  mobile:{
      type:Number,
      required:true,
  },
  address:{
      type:String,
      required:true,
  },
  qualifications:{
      type:String,
      required:true,
  },
  yrsexp:{
      type:Number,
      required:true,
  },
  password:{
      type:String,
      required:true,
  },
  pic:{
      type:String,
      required:true,
      default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" //default image which apply in the user
  },
  },
  {
    timestamps: true,
  }
);

trainerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

trainerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
