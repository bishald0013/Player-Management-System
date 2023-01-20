import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
    teamName: {type: String, require: true},
    managerName: {type: String, require: true},
    managerEmail: {type: String, require: true},
    sportsName: {type: String, require: true},
    matchPlayed: {type: Number, require: true},
    matchWin: {type: Number, require: true},
    matchLoose: {type: Number, require: true},
    teamPlayers: [{
        playersName: String,
        playersEmail: String,
        playersRating: Number
    }] 
})

const TeamModel = mongoose.model("Team", teamSchema)

export default TeamModel