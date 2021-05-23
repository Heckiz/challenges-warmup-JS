const { Category } = require('../database/database')

const categoryCtrl = {};

categoryCtrl.createCategory = async(categoryName) =>{
const categoryExistent = await Category.findOne({where:{name:categoryName}});
if(categoryExistent){
    return categoryExistent;
}else{
    const category = await Category.create({
        name: categoryName
    });
    return category
}

}


module.exports = categoryCtrl;