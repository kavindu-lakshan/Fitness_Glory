const express = require ('express');

const { getPrePost,getPrePosts, createPrePost, updatePrePost, deletePrePost, likePrePost  } = require ('../controllers/preposts.js');


const router = express.Router();

//locathost:5000/preposts
router.get("/:id", getPrePost);
router.get('/', getPrePosts );
router.post('/', createPrePost);
router.patch('/:id', updatePrePost);
router.delete('/:id', deletePrePost);
router.patch('/:id/likePrePost',likePrePost);


module.exports = router;