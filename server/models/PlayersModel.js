import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
    playerName: {type: String, require: true},
    playerEmail: {type: String, require: true},
    sportsPlay: {type: String, require: true}
})

const PlayerModel = mongoose.model('Players', playerSchema)

export default PlayerModel