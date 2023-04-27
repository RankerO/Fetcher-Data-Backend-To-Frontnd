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
app.use(cors());
dotenv.config();
connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


// Static files
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/front_end/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname1, "front_end", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`.yellow.bold);
});

