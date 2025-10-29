import env from "@/env";
import { pinoLogger } from "hono-pino";
import pino from "pino";
import PinoPretty from "pino-pretty";

export function pLogger() {
    
    return pinoLogger({
        pino: pino({
            level: env.LOG_LEVEL || "info",
        },env.NODE_ENV === "production" ? undefined : PinoPretty()),
        
    });
}