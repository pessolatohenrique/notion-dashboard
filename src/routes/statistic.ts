import { Router } from "express";

import { StatisticController } from "../controllers/StatisticController";

const router = Router();

router.route("/statistic/:id").get(StatisticController.index);

export default router;
