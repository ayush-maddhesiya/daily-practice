import mongoose from "mongoose";

const patientdataSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        emun : ["A+","B+","AB+","O"],
        required: true
    },
    Patienthistory:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Patienthistory",
        required : true
    },
    treatedBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    inDeparment:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Deparment",
        required: true
    }
},{timestamps:true})

export const PatientData = mongoose.model("PatientData", patientdataSchema)