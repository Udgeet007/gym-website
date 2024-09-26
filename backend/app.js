import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 4000;
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["POST"],
    credentials: true,
  })
); //use for connecting backend and frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res,next) =>{
    res.json({success:true, message: "Welcome!"})
});

app.use(router);

console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
