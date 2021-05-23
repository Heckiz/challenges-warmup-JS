const { Router } = require('express');
const router = Router();

const {getAllHashtags,getHashtag,deleteHashtag,updateHashtag} = require('../controllers/hashtag.controller');

router.route('/')
    .get(getAllHashtags)

 router.route('/:id')
     .get(getHashtag)
     .delete(deleteHashtag)
     .put(updateHashtag);
     
module.exports = router;