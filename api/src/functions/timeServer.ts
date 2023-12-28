import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function timeServer(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    
    const now = new Date().toISOString();
       
    return {
        jsonBody: {
            serverTime: now
        }
    };
}

app.http('timeServer', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: timeServer
});
