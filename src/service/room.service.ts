import { IRoom } from "../types/types";

export const addRoom = async (roomData: IRoom) => {
    try {
        // Implement logic to save to database here
        console.log("Room to be added:", roomData);
        return roomData;
    } catch (error) {
        console.error("Error in addRoom service:", error);
        throw error;
    }
};