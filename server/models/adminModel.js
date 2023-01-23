import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    adminName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
})

const AdminModel = mongoose.model('Admin', adminSchema)

export default AdminModel