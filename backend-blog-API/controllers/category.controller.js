const { Category, Post } = require('../database/database')

const categoryCtrl = {};


categoryCtrl.getCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.status(200).json(categories);
}

categoryCtrl.createCategory = async (categoryName) => {
    const categoryExistent = await Category.findOne({ where: { name: categoryName } });
    if (categoryExistent) {
        return categoryExistent;
    } else {
        const category = await Category.create({
            name: categoryName
        });
        return category
    }
}


categoryCtrl.getCategory = async (req, res) => {
    const category = await Category.findOne({
        where: { id: req.params.id }, include: {
            model: Post,
            attributes: ['title', 'content', 'imageUrl']
        }
    });
    res.status(200).json(category);
}

categoryCtrl.deleteCategory = async (req, res) => {
    const category = await Category.findOne({ where: { id: req.params.id } })
    category.destroy()
    res.send('category delete')

}

categoryCtrl.updateCategory = async (req, res) => {
    const category = await Category.findOne({ where: { id: req.params.id } });
    const { name } = req.body;
    category.update({
        name
    })
    res.send('category update')

}


module.exports = categoryCtrl;