import mongoose, { Schema } from "mongoose";


const CardSchema = new Schema({
    userName: {
        type: String
    },
    fullName: {
        type: String
    },
    images: [{
        type: String,
        required: true
    }],
    video: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
    city: {
        type: String,

    },
    facelitce: {
        type: String,
    },
    idBooked: {
        type: Boolean,
    },
    status: {
        type: String,
        enum: ['available', 'booked', 'sold'],
        default: 'available'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    location: {
        type: String
    }
    ,
    about: {
        type: String
    },
    videoUrl: {
        type: String
    },
    amenities: {
        type: String
    },
    features: {
        type: String
    }
});

export const Room = mongoose.model("Room", CardSchema);
export default Room;
