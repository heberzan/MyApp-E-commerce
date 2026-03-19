"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPasswordService = exports.createCredentialService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const credential_repository_1 = require("../repositories/credential.repository");
// ...
const createCredentialService = async (credentialDto) => {
    const { password } = credentialDto;
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const credential = credential_repository_1.CredentialRepository.create({ password: hashedPassword });
    await credential_repository_1.CredentialRepository.save(credential);
    return credential;
};
exports.createCredentialService = createCredentialService;
const checkPasswordService = async (password, hashedPassword) => {
    return bcrypt_1.default.compare(password, hashedPassword);
};
exports.checkPasswordService = checkPasswordService;
