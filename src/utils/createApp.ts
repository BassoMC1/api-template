import express, {Express} from "express";
import cors from "cors"
import { config } from "dotenv";
import routers from "../routers"
config();

export function createApp(): Express {
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded())
    app.use(cors({origin: ["http://localhost:3000"], credentials: true}))   
    app.use("/api", routers)
    return app;
}