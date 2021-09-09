const express = require('express');
const Posts = require('../models/Xposts');

const router = express.Router();


router.post('/Xpost/save', (req,res) => {
   
    let newPost = new Posts(req.body);

    newPost.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});


router.get('/Xposts', (req,res) => {
    Posts.find().exec((err,posts) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts: posts
        });
    });
});


router.get("/Xpost/:id", (req,res) => {
    let postId = req.params.id;

    Posts.findById(postId,(err,post) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    }); 
});




router.put('/Xpost/update/:id', (req,res) => {
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) => {
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );    
    
});


router.delete('/Xpost/delete/:id', (req,res) => {
    Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull", err
        });
        return res.json({
            message:"Deleted successfully",deletedPost
        });
    });
});




module.exports = router;