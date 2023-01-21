import express from "express"
import verifyToken from "../middlewires/middlewire.js"
import ManagerController from "../controller/managerController.js"

const router = express.Router()

router.use("/loggedManger", verifyToken)

router.get("/loggedManger", ManagerController.getLoggedManager)
router.post("/managerSignup", ManagerController.managerSignup)
router.post("/managerlogin", ManagerController.managerLogin)


export default router