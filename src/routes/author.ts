import { Router } from "express";
import { AuthorController } from "../controllers/AuthorController";

const router = Router();

router
  .route("/author")
  .get(AuthorController.index)
  .post(AuthorController.store);

export default router;
