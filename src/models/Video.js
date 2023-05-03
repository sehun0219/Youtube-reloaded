// 우리 데이터가 어떻게 생겼는지 mongoose한테 알려주는 곳
// 내 애플리케이션에 필요한 데이터베이스 모양이 무엇인가 생각해놔야함 그걸하는 곳

import mongoose from "mongoose";
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
