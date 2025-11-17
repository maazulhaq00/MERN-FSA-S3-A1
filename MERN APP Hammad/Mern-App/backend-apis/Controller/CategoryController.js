import Category from "../Models/categoryModel.js";
const createCategory = async (req, res) => {
    try {

        let { name, description } = req.body
        const existedCategory = await Category.findOne({ name })
        if (existedCategory) {
            return res.status(400).json({ success: false, message: `Category ${name} already exists` })
        }

        // const category = await Category.create({name: name, description: description})
        const category = await Category.create({ name, description })

        return res.status(201).json({ success: true, category })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error", error: err })
    }
}
const fetchCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json({ success: true, categories })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error", error: err })
    }
}
const fetchCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);
        return res.status(200).json({ success: true, category })
    }
    catch (err) {
        console.log(err); return res.status(500).json({ success: false, message: "Internal Server Error", error: err })
    }
}
const deleteCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const existedCategory = await Category.findOne({ _id: categoryId })
        if (!existedCategory) {
            return res.status(404).json({ success: false, message: `Category doesn't exists` })
        }
        await Category.findByIdAndDelete(categoryId);
        return res.status(200).json({ success: true, message: "Category deleted successfully" })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error", error: err })
    }
}

const updateCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;

        const existedCategory = await Category.findOne({ _id: categoryId })
        if (!existedCategory) {
            return res.status(404).json({ success: false, message: `Category doesn't exists` })
        }
        const { name, description } = req.body;
        await Category.findByIdAndUpdate(categoryId, { name, description });

        const updatedCategory = await Category.findOne({ _id: categoryId })
        return res.status(200).json({ success: true, category: updatedCategory })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error", error: err })
    }
}
export { createCategory, fetchCategories, fetchCategoryById, deleteCategoryById, updateCategoryById };