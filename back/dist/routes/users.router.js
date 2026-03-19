"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRegister_middleware_1 = __importDefault(require("../middlewares/userRegister.middleware"));
const userLogin_middleware_1 = __importDefault(require("../middlewares/userLogin.middleware"));
const user_controller_1 = require("../controllers/user.controller");
const checkLogin_middleware_1 = __importDefault(require("../middlewares/checkLogin.middleware"));
const order_repository_1 = require("../repositories/order.repository");
const usersRouter = (0, express_1.Router)();
usersRouter.post("/register", userRegister_middleware_1.default, user_controller_1.registerUser);
usersRouter.post("/login", userLogin_middleware_1.default, user_controller_1.login);
usersRouter.get("/orders", checkLogin_middleware_1.default, async (req, res) => {
    const { userId } = req.body;
    const orders = await order_repository_1.OrderRepository.find({
        relations: ["products"],
        where: { user: { id: userId } },
    });
    res.send(orders);
});
exports.default = usersRouter;
