import express from "express";
import cors from "cors";
// import router from "./api/route.js";
import sendEmail from "./api/sendEmail.js";

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // your frontend dev server
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());

app.use(sendEmail);
// app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
