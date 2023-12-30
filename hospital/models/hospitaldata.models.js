import mongoose from  "mongoose";

const doctorSchema = new mongoose.Schema({
    doctorID:{
        tpye: String,
        required: true,
    },    
    depaementID:{
        tpye: String,
        required: true,
    },
    email:{
        tpye: String,
        required: true,
        unique:true
    },
    mobile:{
        type: Number,
        required: true
    },
    expirence:{
        type: Number,
        required: true,
        default: "0"
    }
},{timestamps: true})

export const Doctor = mongoose.model("Doctor",doctorSchema)