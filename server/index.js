import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(
    express.json({
        limit: "100mb",
        extended: true,
    })
);
app.use(
    express.urlencoded({
        limit: "100mb",
        extended: true,
    })
);

app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello to Memories API");
});

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    )
    .catch((err) => {
        console.log(err.message);
    });

//mongoose.set("useFindAndModify", false); - DEPRECATED

// Connect to MongoDB https://mongodb.com/cloud/atlas
