import express from "express"
import AdminController from "../controller/adminController.js"

const router = express.Router()

router.post("/adminSignUp", AdminController.adminSignup)
router.post("/adminLogin", AdminController.adminLogin)
router.get("/allPlayers", AdminController.allPlayers)
router.get("/allManager", AdminController.allManagers)
router.get("/allTeam", AdminController.allTeam)

export default router