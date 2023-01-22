import TeamModel from "../models/TeamModel.js";

class TeamController {  
    static createTeam = async (req, res) => {
        try {
            const {
                teamName, 
                managerName, 
                managerEmail, 
                sportsName, 
                matchPlayed,
                matchWin,
                matchLoose
            } = req.body

            if(teamName && managerName && managerEmail && sportsName && matchPlayed && matchWin && matchLoose ){
                const newTeam = new TeamModel({
                    teamName: teamName,
                    matchWin: matchWin,
                    matchLoose: matchLoose,
                    sportsName: sportsName,
                    matchPlayed: matchPlayed,
                    managerName: managerName,
                    managerEmail: managerEmail,
                })
                await newTeam.save()
                res.status(200).send({status: "success", msg: newTeam})
            }else{
                res.status(400).send({status: "fails", msg: "all fields are required"})
            }
        } catch (error) {
            res.status(400).send({status: "fails", msg: error})
        }
    }

    static getTeam = async(req,res)=>{
        try {
            const {email} = req.user
            const team = await TeamModel.find(({managerEmail: email}))
            res.status(200).send({status: "success", team: team })
        }catch (error) {
            console.log(error)
        }

    }
}

export default TeamController