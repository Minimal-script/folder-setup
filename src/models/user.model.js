import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: [8, 'Name cannot exceed 8 characters'],
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "user"
    },
}, { timestamps: true });
const User = mongoose.model('User', userSchema);

export default User;