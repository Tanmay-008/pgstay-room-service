import express from "express"
import cors from "cors"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "https://pgstay.tanmayshirbhayye.tech",
    ],
    credentials: true
}));




export default app
