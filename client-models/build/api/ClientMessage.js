"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultClientServerResponse = exports.ClientServerResponse = exports.getDefaultClientMessage = exports.ClientMessage = void 0;
const zod_1 = require("zod");
// Client Message from Svelte
const ClientMessage = zod_1.z.object({
    FirstName: zod_1.z.string(),
    CompanyName: zod_1.z.string(),
}).strict();
exports.ClientMessage = ClientMessage;
const getDefaultClientMessage = () => {
    return {
        FirstName: "Josh",
        CompanyName: "webapp.io"
    };
};
exports.getDefaultClientMessage = getDefaultClientMessage;
// Response from server 
const ClientServerResponse = zod_1.z.object({
    ServerMessage: zod_1.z.string(),
    SentAt: zod_1.z.string().datetime(),
}).strict();
exports.ClientServerResponse = ClientServerResponse;
const getDefaultClientServerResponse = () => {
    return {
        ServerMessage: "",
        SentAt: new Date().toISOString(),
    };
};
exports.getDefaultClientServerResponse = getDefaultClientServerResponse;
