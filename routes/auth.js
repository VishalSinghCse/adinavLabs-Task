
const express = require("express");
const {signup} = require("../controllers/post");
//const validator =require("../validator")

const router = express.Router();

router.post("/post", postController.createPosts);
 

module.exports = router;