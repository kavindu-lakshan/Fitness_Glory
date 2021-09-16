const express = require ('express');

const { getPrePosts, createPrePost, updatePrePost, deletePrePost, likePrePost  } = require ('../controllers/preposts.js');


const router = express.Router();

//locathost:5000/preposts
router.get('/', getPrePosts );
router.post('/', createPrePost);
router.patch('/:id', updatePrePost);
router.delete('/:id', deletePrePost);
router.patch('/:id/likePrePost',likePrePost);


module.exports = router;