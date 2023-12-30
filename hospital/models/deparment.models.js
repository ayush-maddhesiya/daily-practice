import mongoose from "mongoose"

const deparmenSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    buildingNumber : {
        type: Number,
        required: true
    },
    NumberofDoctor:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Doctor"
        }
    ]
},{timestamps:true})

export const Deparment = mongoose.model("Deparment",deparmenSchema)