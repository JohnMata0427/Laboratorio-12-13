import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const bdd = mongoose.connect(process.env.MONGO_URL)

export default bdd
