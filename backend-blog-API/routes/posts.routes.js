const { Router } = require('express');
const router = Router();

const {getAllPosts, newPost, getPost, deletePost, updatePost} = require('../controllers/posts.controller');

router.route('/')
    .get(getAllPosts)
    .post(newPost);

router.route('/:id')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

module.exports = router;