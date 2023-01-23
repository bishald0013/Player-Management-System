import AdminModel from "../models/adminModel.js";
import ManagerModel from '../models/ManagerModel.js'
import PlayerModel from "../models/PlayersModel.js";
import bcrypt, {genSalt} from "bcrypt"
import TeamModel from "../models/TeamModel.js";

class AdminController {

    static adminSignup = async (req, res) => {
        try {
            const {email, password, name} = req.body
            const result = new AdminModel({
                adminName: name,
                email: email,
                password: password
            })
            await result.save()
            res.status(200).send({status: "success", msg: result})
        } catch (error) {
            console.log(error)
        }
    }

    static adminLogin = async (req, res)=> {
        try {
            const { email, password } = req.body
            const result = await AdminModel.findOne({adminEmail: email})
            if(!result){
                res.status(400).send({status: "fails", msg:"email not found"})
            }else{
                if((result.email === email )&& (result.password === password)){
                    res.status(200).send({status: "success", msg:"successfully login"})
                }
            }
        } catch (error) {
            res.status(400).send({status: "fails", msg: error})
        }

    }

    static allManagers = async (req, res) => {
        try {
            const result = await ManagerModel.find().select("-password")
            res.status(200).send({status: "success", msg: result})
        } catch (error) {
            console.log(error)
        }
    }

    static allPlayers = async (req, res)=> {
        try {
            const result = await PlayerModel.find()
            res.status(200).send({status: "success", msg: result})
        } catch (error) {
            
        }
    }


    static allTeam = async (req, res)=> {
        try {
            const result = await TeamModel.find()
            res.status(200).send({status: "success", msg: result})
        } catch (error) {
            console.log(error)
        }
    }
}

export default AdminController