import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUFINARY_NAME,
    api_key: process.env.CLOUFINARY_API_KEY,
    api_secret: process.env.CLOUFINARY_SECRET_KEY
});

export const uploadOnCloudinary = async (filePath: string) => {
    if (!filePath) {
        console.log("filePath is empty");
        return null;
    }

    try {
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto"
        });

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return response.secure_url;
    } catch (error) {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        console.error("error in uploadOnCloudinary", error);
        return null;
    }
};