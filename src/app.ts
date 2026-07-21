import express from "express"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("api/v1/room/");

export default app