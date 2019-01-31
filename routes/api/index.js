const router = require("express").Router();
const listRoutes = require("./list");


//Lead routes
router.use("/list", listRoutes);


module.exports = router;