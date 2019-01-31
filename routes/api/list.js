const router = require ("express").Router();
//get Controller later

const listController = require("../../controllers/listController")

router.route("/getList")
.get(listController.getList);



module.exports = router;