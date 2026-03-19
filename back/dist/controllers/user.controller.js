"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerUser = void 0;
const catchedController_1 = require("../utils/catchedController");
const user_service_1 = require("../services/user.service");
exports.registerUser = (0, catchedController_1.catchedController)(async (req, res) => {
    const { email, password, name, address, phone } = req.body;
    const newUser = await (0, user_service_1.registerUserService)({
        email,
        password,
        name,
        address,
        phone,
    });
    res.status(201).send(newUser);
});
exports.login = (0, catchedController_1.catchedController)(async (req, res) => {
    const { email, password } = req.body;
    const user = await (0, user_service_1.loginUserService)({ email, password });
    res.status(200).send({
        login: true,
        user: user.user,
        token: user.token,
    });
});
