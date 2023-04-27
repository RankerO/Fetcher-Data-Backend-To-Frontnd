const asyncHandler = require("express-async-handler");
const User = require("../models/user");
//@description     /*Male Users which have a phone price greater than 10, 000.*/
//@access          Public
const greaterthan10000 = asyncHandler(async (req, res) => {
    const users = await User.find({
        $expr: { $gt: [{ $toDouble: "$phone_price" }, 10000.0] },
        "gender": "Male"    });
     res.status(200).json(users);
});


//@description         /*Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.*/
//@access          Public
const notincludeanydigit = asyncHandler(async (req, res) => {
   const users = await User.find({
        "car": { "$in": ["BMW", "Mercedes", "Audi"] },
        "email": { $not: /\d/ }
   });
    res.status(200).json(users);
});

//@description         /*Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.*/
//@access          Public
const tartswithM = asyncHandler(async (req, res) => {
    const users = await User.find({
        // last_name: /^M/,
        // quote: { $exists: true, $type: "string", $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
        // $expr: { $gt: [{ $indexOfCP: ["$email", "$last_name"] }, -1] }
        "last_name": /^M/,
        "quote": { $exists: true, $ne: null },
        $expr: { $gt: [{ $strLenCP: "$quote" }, 15] },
        $expr: {
        $eq: [
            { $indexOfBytes: ["$email", "$last_name"] },
            -1
        ]
    },
    });
    res.status(200).json(users);
});


//@description             /*Show the data of top 10 cities which have the highest number of users and their average income.*/
//@access          Public
const averageincome = asyncHandler(async (req, res) => {
    const users = await User.aggregate([
        {
            $group: {
                _id: "$city",
                userCount: { $sum: 1 },
                avgIncome: { $avg: { $toDouble: "$income" } }
            }
        },
        { $sort: { userCount: -1 } },
        { $limit: 10 }
    ]);
    res.status(200).json(users);
});
    
//@description     Users which have an income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
//@access          Public
const lowerthan5 = asyncHandler(async (req, res) => {
      const users=await User.find({
        income: { $lt: 5 },
        car: { $in: ["BMW", "Mercedes"] }
    })
    res.status(200).json(users);
});
module.exports = { greaterthan10000, notincludeanydigit, tartswithM, averageincome, lowerthan5};

//req.body is used  for post/put req.
//req.params is used for search by ID.

// find all data
    // const users = await User.find({});

    // find data by name
    // const users = await User.find({ car: "BMW", });

    //find data by query 
    // const users = await User.find(req.query);
    // console.log(req.query);
    
    
    /*Male Users which have a phone price greater than 10, 000.*/
    // const users = await User.find({
    //     $expr: { $gt: [{ $toDouble: "$phone_price" }, 10000.0] },
    //     "gender": "Male"    });
    
    /*Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.*/
    // const users = await User.find({
    //     "car": { "$in": ["BMW", "Mercedes", "Audi"] },
    //     "email": { $not: /\d/ }
    // });
    
/*Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.*/
    // const user = User.find({
    //     lastName: /^M/,
    //     quote: { $exists: true, $type: "string", $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
    //     $expr: { $gt: [{ $indexOfCP: ["$email", "$lastName"] }, -1] }
    // });
    // const users = await User.find({
    //     "car": { "$in": ["BMW", "Mercedes", "Audi"] },
    //     "email": { $not: /\d/ }
    // });
    
    /*Show the data of top 10 cities which have the highest number of users and their average income.*/
    // const users =await User.aggregate([
    //     {
    //         $group: {
    //             _id: "$city",
    //             userCount: { $sum: 1 },
    //             avgIncome: { $avg: "$income" }
    //         }
    //     },
    //     { $sort: { userCount: -1 } },
    //     { $limit: 10 }
    // ]);
    // const users=await User.find({
    //     income: { $lt: 5 },
    //     car: { $in: ["BMW", "Mercedes"] }
    // })
    // res.status(200).json(users);