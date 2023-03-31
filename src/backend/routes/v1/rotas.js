const express = require("express");
const router = express.Router();

const {
    getPositions,
    postPositions,
} = require("../../controllers/position");

router.get("/simulacao", getPositions);

router.post("/newPosition", postPositions);

module.exports = router;
