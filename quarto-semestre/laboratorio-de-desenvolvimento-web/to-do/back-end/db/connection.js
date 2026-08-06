import mongoose from "mongoose";

async function main(){
    await mongoose.connect('mongodb://localhost:27017/to-do');
    console.log("Conectado ao banco de dados MongoDB");
}
main.catch((err) => {console.log(err);});

export default mongoose;