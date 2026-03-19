"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const order_service_1 = require("../services/order.service");
const catchedController_1 = require("../utils/catchedController");
exports.createOrder = (0, catchedController_1.catchedController)(async (req, res) => {
    const { products } = req.body;
    const userId = req.body.userId;
    const newOrder = await (0, order_service_1.createOrderService)({ userId, products });
    res.send(newOrder);
});
