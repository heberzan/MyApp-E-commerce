"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const server_1 = __importDefault(require("./server"));
require("reflect-metadata");
const dataSource_1 = require("./config/dataSource");
const preLoadCategories_1 = require("./helpers/preLoadCategories");
const preLoadProducts_1 = require("./helpers/preLoadProducts");
const initialize = async () => {
    console.log("Initializing server");
    await dataSource_1.AppDataSource.initialize();
    console.log("Database initialized");
    await (0, preLoadCategories_1.preLoadCategories)();
    await (0, preLoadProducts_1.preLoadProducts)();
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server running on port ${envs_1.PORT}`);
    });
};
initialize();
