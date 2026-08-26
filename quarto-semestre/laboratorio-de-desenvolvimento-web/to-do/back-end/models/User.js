import mongoose from '../db/connection.js';

const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    resetToken:{
        type: String,
        select: false
    },
    resetTokenExpiry:{
        type: Date,
        select: false
    }
},{timestamp: true}); // timestamp: true → cria automaticamente os campos createdAt e updatedAt
const User = mongoose.model('User', userSchema);
export default User;