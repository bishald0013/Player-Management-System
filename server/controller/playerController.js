import PlayerModel from "../models/PlayersModel.js";

class PlayerController {
    static addPlayer = async (req, res) => {
        try {
            const {playerName, rating, managerName, managerEmail} = req.body

            const newPlayer = new PlayerModel({
                playerName: playerName,
                rating: rating,
                managerName: managerName,
                managerEmail: managerEmail
            })
            await newPlayer.save().sort({'rating': -1})
            res.status(200).send({status: "success", data: newPlayer})

        } catch (error) {
            res.status(400).send({status: "fails", msg: error})
        }
    }

    static getPlayer = async (req, res) =>{
        try {
            const {email} = req.user
            const data = await PlayerModel.find(({managerEmail: email})).sort({'rating':-1})
            res.status(200).send({status: "success", msg: data})
        } catch (error) {
            res.status(400).send({status: "fails", msg: error})
        }
    }
}

export default PlayerController