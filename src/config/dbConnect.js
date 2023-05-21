import mongoose from "mongoose";
mongoose.connect("mongodb+srv://marangoni:Master01@clusteralura.h77vpry.mongodb.net/alura")

let db = mongoose.connection

export default db



