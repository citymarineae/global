import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
    senderName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

export const Email = mongoose.models.Email || mongoose.model('Email',EmailSchema)