import { z } from "zod";

// Client Message from Svelte
const ClientMessage = z.object({
    FirstName: z.string(),
    CompanyName: z.string(),
}).strict();

type ClientMessageType = z.infer<typeof ClientMessage>;

const getDefaultClientMessage = () : ClientMessageType => {
    return {
        FirstName: "Josh",
        CompanyName: "webapp.io"
    }
};

// Response from server 
const ClientServerResponse = z.object({
    ServerMessage: z.string(),
    SentAt: z.string().datetime(),
}).strict();

type ClientServerResponseType = z.infer<typeof ClientServerResponse>;

const getDefaultClientServerResponse = () : ClientServerResponseType => {
    return {
        ServerMessage: "",
        SentAt: new Date().toISOString(),
    }
};

export {
    ClientMessage,
    ClientMessageType,
    getDefaultClientMessage,

    ClientServerResponse,
    ClientServerResponseType,
    getDefaultClientServerResponse,
}