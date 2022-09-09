import { Router } from "express";
import { middleware } from "../middlewares/schemasValidationMiddleware";
import { tokenValidationMiddleware } from "../middlewares/authValidationMiddleware";
import * as credentialsController from "../controllers/credentialsController";
import * as credentialsSchemas from "../schemas/credentialsSchema";

const router = Router();

router.post(
  "/credentials",
  tokenValidationMiddleware,
  middleware(credentialsSchemas.newCredentialSchema),
  credentialsController.newCredential
);

router.get(
  "/credentials",
  tokenValidationMiddleware,
  credentialsController.viewAllCredentials
);

router.get(
  "/credentials/:id",
  tokenValidationMiddleware,
  credentialsController.viewCredentialById
);

// router.delete(
//   "/credentials:id",
//   tokenValidationMiddleware,
//   credentialsController.deleteCredential
// );

export default router;
