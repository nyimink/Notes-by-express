import mongoose from "mongoose";

async function connectDB(uri) {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("DB connection failed:", error)
        process.exit(1);
    }
}

export default connectDB;