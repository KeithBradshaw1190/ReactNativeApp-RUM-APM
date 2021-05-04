const listController = require("../controller/List")
const express = require("express");
const router = express.Router();

// GetAll list items & Create list item
router.post("/list",listController.create);
router.get("/list",listController.getAll );
router.delete("/list/:_id",listController.delete );




module.exports = router;