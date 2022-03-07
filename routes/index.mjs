import express from "express";
import importadorRoutes from './importacion.mjs';

const router = express.Router();
console.log('ALGO');


router.get("/api-status", (req, res) => {
    console.log('ALGO');
    res.json({
        status: "ok",
    });
});
router.use('/importar', importadorRoutes);

export default router;