"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../utils/errors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("../config/envs");
const checkLogin = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return next(new errors_1.ClientError("Token is required"));
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, envs_1.JWT_SECRET);
        req.body.userId = decoded.userId;
    }
    catch (error) {
        next(new errors_1.ClientError("Invalid token"));
    }
    console.log("Token Check OK");
    next();
};
exports.default = checkLogin;
