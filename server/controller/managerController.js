import jwt from 'jsonwebtoken'
import bcrypt, { genSalt } from 'bcrypt'
import ManagerModel from '../models/ManagerModel.js'

const secretKey =
  'this secret key should be used in .env file but it is for trying purpose'

class ManagerController {
  static managerSignup = async (req, res) => {
    try {
      const { name, email, password, sports } = req.body

      if (name && email && password && sports) {
        const managerEmail = await ManagerModel.findOne({ email: email })

        if (!managerEmail) {
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(password, salt)

          const newManager = new ManagerModel({
            name: name,
            email: email,
            password: hashedPassword,
            sports: sports,
          })

          await newManager.save()

          const userId = await ManagerModel.findOne({ email: email })

          const token = jwt.sign({ userId: userId._id }, secretKey, {
            expiresIn: '5d',
          })

          res
            .status(200)
            .send({ status: 'success', msg: newManager, token: token })
        } else {
          res
            .status(400)
            .send({ status: 'fails', msg: 'Manager allready exists' })
        }
      } else {
        res
          .status(400)
          .send({ status: 'fails', msg: 'all fields are required' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  static managerLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if(email && password) {
            const UserEmail = await ManagerModel.findOne({email: email})
            if(!UserEmail){
                res.status(400).send({status: "fails", msg: "emailId not found"})
            }else{
                const comparePassword = await bcrypt.compare(password, UserEmail.password )
                if((UserEmail.email === email) && comparePassword){
                    const token = jwt.sign({userId: UserEmail._id}, secretKey, {expiresIn: "5d"})
                    res.status(200).send({status: "success", msg: "Login Success", token: token})
                }else{
                    res.status(400).send({status: "fails", msg:"email or password doesnot match"})
                }
            }
        }else{
            res.status(400).send({status: "fails", msg: "both the fields are required"})
        }

    } catch (error) {
        console.log(error)
    }
  }
}

export default ManagerController
