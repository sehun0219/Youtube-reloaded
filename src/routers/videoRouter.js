import express from "express";
import {
  watch,
  getEdit,
  remove,
  upload,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);

videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

videoRouter.get("/:id(\\d+)/delete", remove);

export default videoRouter;
