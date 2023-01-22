import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
    playerName: {type: String, require: true},
    rating: {type: String},
    managerName: {type: String},
    managerEmail: {type: String, require: true},
})

const PlayerModel = mongoose.model('Players', playerSchema)

export default PlayerModel