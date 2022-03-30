import { Router } from "express";
import { AuthorController } from "../controllers/AuthorController";

const router = Router();

router.route("/search").get(AuthorController.index);

export default router;
