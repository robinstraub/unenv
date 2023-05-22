export declare const fetch: {
    (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>;
    Promise: PromiseConstructor;
    isRedirect: (code: number) => boolean;
};
export declare const Headers: {
    new (init?: HeadersInit | undefined): Headers;
    prototype: Headers;
};
export declare const Request: {
    new (input: RequestInfo | URL, init?: RequestInit | undefined): Request;
    prototype: Request;
};
export declare const Response: {
    new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
    prototype: Response;
    error(): Response;
    redirect(url: string | URL, status?: number | undefined): Response;
};
export declare const FetchError: ErrorConstructor;
export declare const AbortError: ErrorConstructor;
export declare const isRedirect: (code: number) => boolean;
export default fetch;
