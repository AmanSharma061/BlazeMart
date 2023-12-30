import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IEvent extends mongoose.Document {
    _id: string;
    title: string;
    description: string;
    location: string;
    createdAt: Date;
    imageURL: string;
    startDate: Date;
    endDate: Date;
    price: string;
    isFree: boolean;
    category: { _id: string, name: string };
    organizer: { _id: string, firstName: string, lastName: string };
}


const EventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        imageURL: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            default: Date.now
        },
        endDate: {
            type: Date,
            default: Date.now

        },
        price: {
            type: String,
            required: true
        },
        isFree: {
            type: Boolean,
            default: false
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        organizer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },


    },

    {
        timestamps: true,
    }
);

const Event = mongoose.model("Event", EventSchema);
export default Event;
