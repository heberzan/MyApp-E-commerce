"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preLoadCategories = void 0;
const dataSource_1 = require("../config/dataSource");
const Category_1 = require("../entities/Category");
const category_respository_1 = require("../repositories/category.respository");
const categoriesToPreLoad = [
    { name: 'Smartphones' },
    { name: 'Laptops' },
    { name: 'Tablets' },
    { name: 'Headphones' },
    { name: 'Cameras' },
    { name: 'Printers' },
    { name: 'Monitors' },
    { name: 'Storage' },
    { name: 'Accessories' }
];
const preLoadCategories = async () => {
    const categories = await category_respository_1.CategoryRepository.find();
    if (!categories.length)
        await dataSource_1.AppDataSource.createQueryBuilder().insert().into(Category_1.Category).values(categoriesToPreLoad).execute();
    console.log('Categories preloaded');
};
exports.preLoadCategories = preLoadCategories;
