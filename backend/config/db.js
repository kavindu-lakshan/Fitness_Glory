const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
