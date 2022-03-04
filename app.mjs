import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes/index.mjs";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("It works");
});
app.listen(process.env.PORT, () => {
    console.log(
        `API Server started and listening on port ${process.env.PORT} with a ${process.env.NODE_ENV} environment`
    );
});

export default app;
