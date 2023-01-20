import mongoose from "mongoose"

const managerSchema = mongoose.Schema({
    name: {type: String, require: "Manager name is requite"},
    email: {type: String, require: "Email id is require"},
    password: {type: String, require: true},
    sports: {type: String, require: true}
})

const ManagerModel = mongoose.model("Manager", managerSchema)
export default ManagerModel