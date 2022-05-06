const mongoose = require('mongoose')

module.exports=connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

// module.exports = connect
