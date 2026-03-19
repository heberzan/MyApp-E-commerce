"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../utils/errors");
const products_service_1 = require("../services/products.service");
const validateOrderFields = (req, res, next) => {
    const { products } = req.body;
    if (!products.length)
        next(new errors_1.ClientError("Order must have an array of products"));
    if (!products || products.length === 0)
        return next(new errors_1.ClientError("Order must have at least one item"));
    next();
};
const validateItemsExist = async (req, res, next) => {
    const { products } = req.body;
    for await (const itemId of products) {
        const exists = await (0, products_service_1.checkProductExists)(itemId);
        if (!exists)
            return next(new errors_1.ClientError("One or more items do not exist in the database"));
    }
    next();
};
exports.default = [validateOrderFields, validateItemsExist];
