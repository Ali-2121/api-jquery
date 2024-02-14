import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION_STRING_DB)
    // { 
    //     useNewUrlParser: true, 
    //     useUnifiedTopology: true, 
    //     writeConcern: { 
    //       w: 'majority', 
    //       j: true, 
    //       wtimeout: 1000 
    //     } })
    .then(db=> console.log("Database connected"))
    .catch(err=>console.log(err))

export default mongoose;