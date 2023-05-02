import { z } from "zod";
// Client Message from Svelte
const ClientMessage = z.object({
    FirstName: z.string(),
    CompanyName: z.string(),
}).strict();
const getDefaultClientMessage = () => {
    return {
        FirstName: "Josh",
        CompanyName: "webapp.io"
    };
};
// Response from server 
const ClientServerResponse = z.object({
    ServerMessage: z.string(),
    SentAt: z.string().datetime(),
}).strict();
const getDefaultClientServerResponse = () => {
    return {
        ServerMessage: "",
        SentAt: new Date().toISOString(),
    };
};
export { ClientMessage, getDefaultClientMessage, ClientServerResponse, getDefaultClientServerResponse, };
