import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected To MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log("Failed To Connect To MongoDB", error);
    process.exit(1);
  }
};
