import express from "express";
import { deleteArticleById, getArticles, getArticleById } from "../db/articles";

export const getAllArticles = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const articles = await getArticles();

    return res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getArticleByID = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const article = await getArticleById(id);
    return res.status(200).json(article);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteArticle = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deleteArticle = await deleteArticleById(id);
    return res.json(deleteArticle);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
