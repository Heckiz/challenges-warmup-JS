const { Router } = require('express');
const router = Router();

const {getCategories, getCategory, deleteCategory, updateCategory} = require('../controllers/category.controller');

router.route('/')
    .get(getCategories)

 router.route('/:id')
     .get(getCategory)
     .delete(deleteCategory)
     .put(updateCategory);
     
module.exports = router;