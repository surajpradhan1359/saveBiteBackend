import mongoose from 'mongoose';
import 'dotenv/config'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOOSE_API_KEY+"SaveBiteDB");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;