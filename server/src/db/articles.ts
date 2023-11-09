import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categoryName: { type: String, required: true },
  locationName: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: String, required: true },
  userID: { type: String, required: true },
  username: { type: String, required: true },
  value: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
});

export const ArticleModel = mongoose.model("Article", ArticleSchema);

export const getArticles = () => ArticleModel.find();
export const getArticleById = (id: string) => ArticleModel.findById(id);
export const createArticle = (values: Record<string, any>) =>
  new ArticleModel(values).save().then((article) => article.toObject());
export const deleteArticleById = (id: string) =>
  ArticleModel.findOneAndDelete({ _id: id });
