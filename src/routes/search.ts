import { Router } from "express";

import { SearchController } from "../controllers/SearchController";

const router = Router();

router.route("/search").get(SearchController.index);

export default router;
