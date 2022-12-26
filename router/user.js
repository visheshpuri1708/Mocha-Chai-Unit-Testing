const router = require('express').Router();
const { postUserInfo, getUserinfo, getSingleUserInfo, deleteUser, updateUserInfo } = require("../controller/user");

router.post("/postuserinfo", postUserInfo);
router.get("/getuserinfo", getUserinfo);
router.get("/singleuser/:userid", getSingleUserInfo);
router.delete("/deleteuser/:id", deleteUser);
router.put("/updateuser/:id", updateUserInfo);


module.exports = router;