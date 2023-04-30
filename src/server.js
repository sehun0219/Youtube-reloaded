import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

const handelHome = (req, res) => {
  return res.send("home page!!");
};
const handleLogin = (req, res) => {
  return res.send("login page!!");
};

app.use(logger);
app.get("/", handelHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😉👍`);
app.listen(4000, handleListening);
