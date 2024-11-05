import mongoose from "mongoose";

export async function connectDB() {
  mongoose.connect("mongodb+srv://Grupo-11:grupo11@cursadanodejs.ls9ii.mongodb.net/Node-js",
    {
      useNewUrlParser:true,
      useUnifiedTopology:true
    }
  )
}
