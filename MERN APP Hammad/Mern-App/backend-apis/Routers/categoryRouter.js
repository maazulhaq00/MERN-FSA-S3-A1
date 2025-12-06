import * as CategoryController from './Controller/CategoryController.js'

import express from 'express'

constcategoryRouter = express.Router();

categoryRouter.post("/", CategoryController.createCategory);
categoryRouter.get("/", CategoryController.fetchCategories);
categoryRouter.get("/:id", CategoryController.fetchCategoryById);
categoryRouter.delete("/:id", CategoryController.deleteCategoryById);
categoryRouter.put("/:id", CategoryController.updateCategoryById);

export default categoryRouter;