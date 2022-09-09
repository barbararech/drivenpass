import { Router } from "express";
import { middleware } from "../middlewares/schemasValidationMiddleware";
import { tokenValidationMiddleware } from "../middlewares/authValidationMiddleware";
import * as networksController from "../controllers/networksController";
import { newNetworkSchema } from "../schemas/networksSchema";

const router = Router();

router.post(
  "/networks",
  tokenValidationMiddleware,
  middleware(newNetworkSchema),
  networksController.newNetwork
);

router.get(
  "/networks",
  tokenValidationMiddleware,
  networksController.viewAllNetworks
);

// router.get(
//   "/networks/:id",
//   tokenValidationMiddleware,
//   networksController.viewNetworkById
// );

// router.delete(
//   "/networks/:id",
//   tokenValidationMiddleware,
//   networksController.deleteNetwork
// );

export default router;
