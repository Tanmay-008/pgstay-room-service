import mongoose from "mongoose";


export const mongodbconnction = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_STRING}${process.env.DB_NAME}`);
        console.log(" Database connected successfully!");
    } catch (error) {
        console.error(" MongoDB Connection Error:", error);
    }
}

