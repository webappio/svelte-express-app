"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var ClientMessage_1 = require("client-models/build/api/ClientMessage");
var app = (0, express_1.default)();
var port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var zodPostMiddleware = function (endpoint, input, output, handler) {
    app.post(endpoint, function (req, res) {
        try {
            var parsedBody = input.parse(req.body);
            var value = handler(parsedBody);
            var parsedValue = output.parse(value);
            res.send(parsedValue);
        }
        catch (e) {
            var errString = "Zod object did not meet the format specified for endpoint: ".concat(endpoint, ".");
            console.error(errString, e);
            if (e instanceof Error) {
                throw e;
            }
            throw new Error(errString);
        }
    });
};
zodPostMiddleware("/message", ClientMessage_1.ClientMessage, ClientMessage_1.ClientServerResponse, function (input) {
    var val = { ServerMessage: "", SentAt: "" };
    val.ServerMessage = "Hello ".concat(input.FirstName, " from ").concat(input.CompanyName, "! This is a webapp.io project.");
    val.SentAt = new Date().toISOString();
    return val;
});
app.get("/", function (req, res) {
    res.send("hello");
});
app.listen(port, function () {
    console.log("Server running on port: ".concat(port));
});
