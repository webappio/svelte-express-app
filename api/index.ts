import express, { Express, Request, Response } from "express";
import cors from "cors";
import { z } from "zod";
import { ClientMessage, ClientServerResponse, ClientServerResponseType } from "client-models/build/api/ClientMessage";

const app: Express = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const zodPostMiddleware = <T, V>(endpoint: string, input: z.ZodType<T>, output: z.ZodType<V>, handler: (body: T) => V) => {
    app.post(endpoint, (req: Request, res: Response) => {
        try {
            const parsedBody = input.parse(req.body);
            const value = handler(parsedBody);
            const parsedValue = output.parse(value);
            res.send(parsedValue);
        } catch (e) {
            const errString = `Zod object did not meet the format specified for endpoint: ${endpoint}.`;
            console.error(errString, e);
            if (e instanceof Error) {
                throw e;
            }
            throw new Error(errString);
        }
    })
}

zodPostMiddleware("/message", ClientMessage, ClientServerResponse, (input) => {
    const val : ClientServerResponseType = { ServerMessage: "", SentAt: "" };
    val.ServerMessage = `Hello ${input.FirstName} from ${input.CompanyName}! This is a webapp.io project.`
    val.SentAt = new Date().toISOString();
    return val;
})

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});