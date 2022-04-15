import { Router } from "express";
import { DatabaseController } from "../controllers/DatabaseController";

const router = Router();

router.route("/database/:id").get(DatabaseController.show);

export default router;
