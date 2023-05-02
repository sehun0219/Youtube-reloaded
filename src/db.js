import mongoose from "mongoose";
//127.0.0.1:27017/
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log(" 🚫 DB error:", error));
db.once("open", () => console.log(`✅ DB connected 😊👍`));
