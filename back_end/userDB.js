// require("dotenv").config();
// const connectDB = require("./db/connect");
// const User = require("./models/user");
// // const Sample_data = require("./sample_data.json");
// const start = async () =>
// {
//     try {
//         await connectDB();
// // await User.deleteMany();
// //         await User.create(Sample_data);
//         await User.updateMany(
//             {},
//             [
//                 {
//                     $set: {
//                         income: { $substr: ["$income", 1, -1] },
//                         }
//                 }
//             ]
//         )
//                 console.log("success");
//     }
//     catch (error)
//     {
//         console.log(error);
//     }
// }
// start();
// /*
// db.collection.updateMany(
//             {},
//             [
//                 {
//                     $set: {
//                         income:$substr: ["$income", 1, -1]
//                         }
//                 }
//             ]
//         )
//         */

/*
"server" :"nodemon app.js",
    "client":"npm start --prefix front_end",
    "dev":"concurrently \"npm start\" \"npm run client\" "
    */