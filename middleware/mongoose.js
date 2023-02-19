import mongoose from "mongoose";

const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    } 
    mongoose.connect("mongodb+srv://root:edcesummit23@cluster0.oe7w6wr.mongodb.net/test");
    return handler(req, res);
}

export default connectDb