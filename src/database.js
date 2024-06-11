import mongoose from "mongoose";

const bdd = mongoose.connect(process.env.MONGO_URL);

export default bdd;
