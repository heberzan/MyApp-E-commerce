"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchedController = void 0;
const catchedController = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res);
        }
        catch (error) {
            next(error);
        }
    };
};
exports.catchedController = catchedController;
