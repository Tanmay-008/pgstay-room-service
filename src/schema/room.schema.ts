import { z } from "zod";

export const roomSchema = z.object({
    userName: z.string()
        .trim()
        .min(1, "userName cannot be empty"),

    fullName: z.string()
        .trim()
        .min(1, "fullName cannot be empty"),

    images: z.array(z.string().trim())
        .min(1, "At least one image is required"),

    video: z.string()
        .trim()
        .min(1, "video cannot be empty"),

    price: z.number()
        .positive("Price must be a positive number"),

    city: z.string()
        .trim()
        .min(1, "City cannot be empty"),
});

export type RoomInput = z.infer<typeof roomSchema>;