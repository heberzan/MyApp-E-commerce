"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user.service");
const errors_1 = require("../utils/errors");
const validateUserRegister = (req, res, next) => {
    const { email, password, name, address, phone } = req.body;
    if (!email || !password || !name || !address || !phone)
        next(new errors_1.ClientError("Missing fields"));
    else
        next();
};
const validateUserExists = async (req, res, next) => {
    const { email } = req.body;
    if (await (0, user_service_1.checkUserExists)(email))
        next(new errors_1.ClientError("User already exists", 400));
    else
        next();
};
exports.default = [validateUserRegister, validateUserExists];
