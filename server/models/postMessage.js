import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: new Date()
  }
});

const PostMessages = mongoose.model("PostMessages", postSchema);

export default PostMessages;