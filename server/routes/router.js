import express from "express"
import TeamController from "../controller/teamController.js"
import verifyToken from "../middlewires/middlewire.js"
import ManagerController from "../controller/managerController.js"

const router = express.Router()

//create and login manager routes
router.use("/loggedManger", verifyToken)

router.get("/loggedManger", ManagerController.getLoggedManager)
router.post("/managerSignup", ManagerController.managerSignup)
router.post("/managerlogin", ManagerController.managerLogin)

//create team routes
// router.use("/getTeam", verifyToken)

router.post("/createTeam", TeamController.createTeam)
router.get("/getTeam/:email", TeamController.getTeam)


export default router