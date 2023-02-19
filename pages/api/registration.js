import User from "../../models/User"
import connectDb from "../../middleware/mongoose"

const handler = async(req, res) => {
    if(req.method === "POST"){
        // we add our code here
        let u = new User(req.body)
        u.save()
        res.status(200).json({success: "success"})
    }else{
        res.status(200).json({success: "success"})
    }
}

export default connectDb(handler)