const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const userRoutes  = require("./routes/userRoutes");
const connectDB = require("./db/connect");
// const logger = require("./middleware/logger");
app.use(cors());
dotenv.config();
connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/build")));

//     app.get("*", (req, res) =>
//         res.sendFile(
//             path.resolve(__dirname, "../", "frontend", "build", "index.html")
//         )
//     );
// } else {
//     app.get("/", logger, (req, res) => {
//         res.send("Welcome to the home page");
//     });
// }

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`.yellow.bold);
});

