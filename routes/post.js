
const express = require("express");
const { getPosts,createPost} = require("../controllers/post");
const validator =require("../validator");

const router = express.Router();

/*bugs here edit later*/
router.get("/", postController.getPosts);
router.post("/post", postController.createPosts);



module.exports =router;