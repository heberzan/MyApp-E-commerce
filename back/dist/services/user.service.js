"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.registerUserService = exports.checkUserExists = void 0;
const user_repository_1 = require("../repositories/user.repository");
const errors_1 = require("../utils/errors");
const credential_service_1 = require("./credential.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("../config/envs");
const checkUserExists = async (email) => {
    const user = await user_repository_1.UserRepository.findOneBy({ email });
    return !!user;
};
exports.checkUserExists = checkUserExists;
const registerUserService = async (registerUserDto) => {
    const user = await user_repository_1.UserRepository.create(registerUserDto);
    await user_repository_1.UserRepository.save(user);
    const credential = await (0, credential_service_1.createCredentialService)({
        password: registerUserDto.password,
    });
    user.credential = credential;
    await user_repository_1.UserRepository.save(user);
    return user;
};
exports.registerUserService = registerUserService;
const loginUserService = async (loginUserDto) => {
    const user = await user_repository_1.UserRepository.findOne({
        where: {
            email: loginUserDto.email,
        },
        relations: ["credential", "orders"],
    });
    if (!user)
        throw new Error("User not found");
    if (await (0, credential_service_1.checkPasswordService)(loginUserDto.password, user.credential.password)) {
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, envs_1.JWT_SECRET);
        return {
            user,
            token,
        };
    }
    else {
        throw new errors_1.ClientError("Invalid password");
    }
};
exports.loginUserService = loginUserService;
