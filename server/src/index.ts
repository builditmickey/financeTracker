// t8X1qdsO7RIFAKLS
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
	"mongodb+srv://211210037:t8X1qdsO7RIFAKLS@personalfinancetracker.rymvoq2.mongodb.net/";

mongoose
	.connect(mongoURI)
	.then(() => console.log("Connected to MongoDB!"))
	.catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
