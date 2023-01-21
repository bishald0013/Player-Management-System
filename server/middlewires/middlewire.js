import jwt from "jsonwebtoken"
import ManagerModel from "../models/ManagerModel.js"

const secretKey =
  'this secret key should be used in .env file but it is for trying purpose'

const verifyToken = async (req, res, next) => {
    try {
        let token

        const {authorization} = req.headers
        if(authorization && authorization.startsWith('Bearer')){
            token = authorization.split(' ')[1]
            const { userId } = jwt.verify(token, secretKey )
            req.user = await ManagerModel.findById(userId).select("-password")
            next()
        }else{
            res.status(400).send({status: "fails", msg:"token is not authorised"})
        }

    } catch (error) {
        res.status(400).send({status: "fails", msg: error})
    }
}

export default verifyToken;