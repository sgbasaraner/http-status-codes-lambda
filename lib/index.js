"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultResponse = exports.StatusCodes = void 0;
var http_status_codes_1 = require("http-status-codes");
Object.defineProperty(exports, "StatusCodes", { enumerable: true, get: function () { return http_status_codes_1.StatusCodes; } });
exports.defaultResponse = function (statusCode) {
    var phrase = http_status_codes_1.getReasonPhrase(statusCode);
    return {
        statusCode: statusCode,
        body: JSON.stringify({
            error: phrase
        })
    };
};
