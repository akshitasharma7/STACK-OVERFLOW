import mongoose from "mongoose";
import users from '../models/auth.js'

export const getAllUsers =async (req, res) => {
    try {
        const allUsers = await  users.find();
        const allUserDetails = []
        allUsers.forEach(Users => {
            allUserDetails.push({_id: Users._id, name: Users.name, about: Users.about, tags: Users.tags, joinedOn: Users.joinedOn})
        });
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateProfile = async (req, res) => {
    const {id: _id} = req.params;
    const {name, about, tags}= req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Question unavailable");
    }
    try {
        const updatedProfile = await users.findByIdAndUpdate(_id, {$set: {'name': name, 'about': about, 'tags': tags }}, {new: true})
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({message: error.message})
    }
}