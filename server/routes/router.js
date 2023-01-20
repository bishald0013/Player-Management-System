import express from "express"
import ManagerController from "../controller/managerController.js"

const router = express.Router()

router.post("/managerSignup", ManagerController.managerSignup)
router.post("/managerlogin", ManagerController.managerLogin)


export default router