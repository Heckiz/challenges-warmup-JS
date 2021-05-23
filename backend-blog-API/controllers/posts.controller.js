const postCtrl = {};
const { Post, Category } = require('../database/database')
const { createCategory } = require('../controllers/category.controller')
const cloudinary = require('../helpers/cloudinary.config')
const fs = require('fs-extra');

postCtrl.getAllPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);

}
postCtrl.newPost = async (req, res) => {
    const { title, content, category } = req.body

    try {
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        let imageUrl = result.secure_url;

        const post = await Post.create({
            title,
            content,
            imageUrl
        })
        const cat = await createCategory(category);
        post.addCategory(cat)

        await fs.unlink(req.file.path);
        res.json('post upload');

    } catch (error) {
        console.log(error)

    }

}
postCtrl.getPost = async (req, res) => {
    const post = await Post.findOne({
        where: { id: req.params.id }, include: {
            model: Category,
            attributes: ['name']
        }
    });
    res.status(200).json(post);
}

postCtrl.deletePost = async (req, res) => {
    const post = await Post.findOne({ where: { id: req.params.id } })
    post.destroy()
    res.send('post delete')

}

postCtrl.updatePost = async (req, res) => {
    const post = await Post.findOne({ where: { id: req.params.id } })
    const { title, content } = req.body;
    try {
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        let imageUrl = result.secure_url;
        await post.update({
            title,
            content,
            imageUrl
        })
        res.json('post upload');

    } catch (error) {
        console.log(error)

    }
}


module.exports = postCtrl;