const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //Shehan's testing database. just ignore this.
    //'mongodb+srv://Shehanx86:test123@cluster0.prwte.mongodb.net/fitness_glory_shehan?retryWrites=true&w=majority'
    //process.env.MONGODB_URL
    const con = await mongoose.connect('mongodb+srv://Shehanx86:test123@cluster0.prwte.mongodb.net/fitness_glory_shehan?retryWrites=true&w=majority', {
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
