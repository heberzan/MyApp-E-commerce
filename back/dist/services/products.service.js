"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsService = exports.checkProductExists = void 0;
const product_repository_1 = require("../repositories/product.repository");
const checkProductExists = async (itemId) => {
    const item = await product_repository_1.ProductRepository.findOneBy({
        id: itemId,
    });
    return !!item;
};
exports.checkProductExists = checkProductExists;
const getProductsService = async () => {
    return await product_repository_1.ProductRepository.find();
};
exports.getProductsService = getProductsService;
