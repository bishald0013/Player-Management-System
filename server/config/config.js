import mongoose from "mongoose"
const DATABASE_URL = 'mongodb+srv://bishaldeb:bishaldeb123@cluster0.6s1ycxm.mongodb.net/playerManagementSystem?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log(`Database connected Successfully..`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB