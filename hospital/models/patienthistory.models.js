import mongoose from "mongoose";

const patienthistorySchema = new mongoose.Schema({
    diagnosisWith:{
        type: String,
        required: true
    },
    allergyto:{
        type: String,
        required: true
    },
    numberofSuffering:{
        type: Number,
        required: true
    }
},{timestamps: true})

export const Patienthistory  = mongoose.model("Patienthistory",atienthistorySchema)