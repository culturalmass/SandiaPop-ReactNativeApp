import express from "express";
import {
  deleteArticle,
  getAllArticles,
  getArticleByID,
} from "../controllers/articles";
import { isAuthenticated, isOwner } from "../middlewares";
import { articlePost } from "../controllers/authentication";

export default (router: express.Router) => {
  router.get("/articles", getAllArticles);
  router.get("/articlesbyid/:id", getArticleByID);
  router.delete("/articles/:id", isAuthenticated, isOwner, deleteArticle);
  router.post("/articles/post", isAuthenticated, articlePost);
};
