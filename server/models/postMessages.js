import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: []
  },
  createAt: {
    type: Date,
    default: new Date()
  }
});

const PostMessages = mongoose.model("postmessages", postSchema);

export default PostMessages;