import express from 'express';
import { updateNews, addNews, deleteNews, loadNews } from '../Controlers/newsController.js';
import { verifyTokenEmployee } from '../Controlers/userController.js';
const newsRouter = express.Router();

newsRouter.post('/addnews', addNews);
newsRouter.post('/updatenews', updateNews);
newsRouter.post('/deletenews', deleteNews);
newsRouter.post('/loadnews', loadNews);

export default newsRouter;