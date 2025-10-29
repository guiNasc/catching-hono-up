import { pLogger } from '@/middlewares/pino-logger';
import { OpenAPIHono } from '@hono/zod-openapi';
import { requestId } from 'hono/request-id';
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares';
import type { AppBindings } from './types';
import { defaultHook } from 'stoker/openapi';


export function createRouter() {
    return new OpenAPIHono<AppBindings>({
        strict: false,
        defaultHook,
    });
}


export default function createApp() {
    const app = createRouter();
    app.use(serveEmojiFavicon("✏️"))
    app.use(pLogger());
    app.use('*', requestId())

    app.notFound(notFound);
    app.onError(onError);
    return app;
}