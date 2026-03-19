"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user.service");
const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        next({ message: "Missing fields", status: 400 });
    else
        next();
};
const validateUserExists = async (req, res, next) => {
    const { email } = req.body;
    if (!(await (0, user_service_1.checkUserExists)(email)))
        next({ message: "User does not exist", statusCode: 400 });
    else
        next();
};
exports.default = [validateLogin, validateUserExists];
