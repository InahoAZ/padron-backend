import express from "express";

const router = express.Router();
console.log('ALGO');


router.get("/api-status", (req, res) => {
    console.log('ALGO');
    res.json({
        status: "ok",
    });
});

export default router;