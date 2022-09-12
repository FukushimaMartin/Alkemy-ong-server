const { Categories } = require("../models");
const createError = require("http-errors");

class CategoryController {
    constructor() {}

    async findCategory (id) {
        const category = await Categories.findByPk(id);
        if (!category) {
            throw createError.NotFound("Category not found");
        }
        return category;
    }

    createCategory = async (req, res, next) => { // POST created for testing purposes
        try {
            const category = await Categories.create(req.body);
            return res.status(201).json(category);
        } catch (err) {
            next(err);
        }
    }

    updateCategory = async (req, res, next) => {
        const id = req.params.id;
        try {
            const category = await this.findCategory(id);
            const updatedCategory = await category.update(req.body);
            return res.status(200).json(updatedCategory);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = CategoryController;
