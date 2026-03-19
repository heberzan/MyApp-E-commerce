"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderService = void 0;
const order_repository_1 = require("../repositories/order.repository");
const product_repository_1 = require("../repositories/product.repository");
const user_repository_1 = require("../repositories/user.repository");
const createOrderService = async (createOrderDto) => {
    const productsF = [];
    for await (const id of createOrderDto.products) {
        const product = await product_repository_1.ProductRepository.findOneBy({ id });
        if (!product)
            throw new Error("Product not found");
        productsF.push(product);
    }
    const userF = await user_repository_1.UserRepository.findOneBy({ id: createOrderDto.userId });
    if (!userF)
        throw new Error("User not found");
    const newOrder = order_repository_1.OrderRepository.create();
    newOrder.status = "approved";
    newOrder.date = new Date();
    newOrder.user = userF;
    newOrder.products = productsF;
    await order_repository_1.OrderRepository.save(newOrder);
    return newOrder;
};
exports.createOrderService = createOrderService;
