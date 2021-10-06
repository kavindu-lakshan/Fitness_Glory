const mongoose = require ('mongoose');
const PrePostMessage = require ( "../models/prepostMessage.js");



 const getPrePosts = async (req, res) => {
    try {
        const prepostMessages = await PrePostMessage.find();
        

        res.status(200).json(prepostMessages);

    } catch (error) {
        res.status(404).json({message: error.message});
    }

}

//newly added
const getPrePost = async (req, res) => {
    const { id } = req.params;
  
    try {
      const prepost = await PrePostMessage.findById(id);
  
      res.status(200).json(prepost);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


 const createPrePost = async (req, res) => {
    const prepost = req.body;

    const newPrePost = new PrePostMessage(prepost);
    try {
        await newPrePost.save();

        res.status(201).json(newPrePost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }

}

//update post
// export const updatePrePost = async (req, res) => {
//     const { id: _id } = req.params;
//     const { name, creator, goal, type, level, noWeeks, equipment,sups,selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPrePost = { name, creator, goal, type, level, noWeeks, equipment, sups, tags, selectedFile, _id: id };

//     await PrePostMessage.findByIdAndUpdate(_id, updatedPrePost, { new: true });

//     res.json(updatedPrePost);
// }

//update2
 const updatePrePost = async (req, res) => {
    const { id } = req.params;
    const { name, creator, goal, type, level, noWeeks, equipment,sups,selectedFile,selectedFile2, tags} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPrePost = { name, creator, goal, type, level, noWeeks, equipment, sups, tags, selectedFile,selectedFile2, _id: id  };

    await PrePostMessage.findByIdAndUpdate(id, updatedPrePost, { new: true });

    res.json(updatedPrePost);
}

//delete a post
 const deletePrePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PrePostMessage.findByIdAndRemove(id);

    console.log('DELETE!');

    res.json({ message: "Post deleted successfully." });
}

 const likePrePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const prepost = await PrePostMessage.findById(id);

    const updatedPrePost = await PrePostMessage.findByIdAndUpdate(id, { likeCount: prepost.likeCount + 1 }, { new: true });
    
    res.json(updatedPrePost);
}

module.exports = {
    updatePrePost,
    createPrePost,
    likePrePost,
    deletePrePost,
    getPrePosts,
    getPrePost,
  };
  
