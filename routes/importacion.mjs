import express from "express";
import importadorCtrl from "../controllers/importacion.mjs";

const router = express.Router();

router.route("/csv").post(importadorCtrl.importData);

export default router;
