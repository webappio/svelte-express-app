import { z } from "zod";
declare const ClientMessage: z.ZodObject<{
    FirstName: z.ZodString;
    CompanyName: z.ZodString;
}, "strict", z.ZodTypeAny, {
    FirstName: string;
    CompanyName: string;
}, {
    FirstName: string;
    CompanyName: string;
}>;
type ClientMessageType = z.infer<typeof ClientMessage>;
declare const getDefaultClientMessage: () => ClientMessageType;
declare const ClientServerResponse: z.ZodObject<{
    ServerMessage: z.ZodString;
    SentAt: z.ZodString;
}, "strict", z.ZodTypeAny, {
    ServerMessage: string;
    SentAt: string;
}, {
    ServerMessage: string;
    SentAt: string;
}>;
type ClientServerResponseType = z.infer<typeof ClientServerResponse>;
declare const getDefaultClientServerResponse: () => ClientServerResponseType;
export { ClientMessage, ClientMessageType, getDefaultClientMessage, ClientServerResponse, ClientServerResponseType, getDefaultClientServerResponse, };
