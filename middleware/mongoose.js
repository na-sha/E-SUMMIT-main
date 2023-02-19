import mongoose from "mongoose";

const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    } 
    mongoose.connect("mongodb://localhost:27017/e-summit23");
    return handler(req, res);
}

export default connectDb