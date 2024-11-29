import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    about:{type: String},
    tags:{type: [String]},
    joinedOn:{type: Date, default: Date.now},
    followers: [{type: String}],
    followings: [{type: String}],
    linkedin: [{type: String}]
})

export default mongoose.model("users", userSchema)