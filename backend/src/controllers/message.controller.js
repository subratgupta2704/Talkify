import User from "../models/user.model.js";
import Message from "../models/message.model.js"

// Get all users except the logged in user

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")
        
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message)
        res.status(500).json({message: "Internal server error"})    
    }
} 

// Get messages between the logged in user and another user

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params
        const myId = req.user._id;

        const messages = await Message.find({
            $or:[
                {senderId:myId, receiverId:receiverId}, //I am the sender and other one is receiver.
                {myId:userToChatId, receiverId:myId}, //I am the receiver and other is sender.
            ]
        })

        res.status(200).json(messages) 
    } catch (error) {
        console.log("Error in getMessages: ", error.message)
        res.status(500).json({message: "Internal server error"})
    }
}

// Send message function

export const sendMessage = async (req,res) =>{
    try {
        const {text, image} = req.body;
        const {id:receiverId} = req.params; 
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            //Upload base 64 image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image : imageUrl,
        })

        await newMessage.save();

        // todo : realtime functionality goes here => socket.io

        res.status(201).json(newMessage)
        
    } catch (error) {
        console.log("Error in sendMessage controller :", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}