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
    Price: {
        type: Number,
        required: true,
    },
    City: {
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

const Room = mongoose.model("Room", CardSchema);

module.exports = Room;
