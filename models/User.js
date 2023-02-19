const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        // required: true
    },
    lname: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true,
        // unique: true
    },
    rollNo: {
        type: Number,
        required: true
    },
    year: {
        type: String,
        // required: true
    },
    branch: {
        type: String,
        // required: true
    },
}, { timestamps: true });

// mongoose.models = {}
export default mongoose.models.User || mongoose.model("User", UserSchema);
