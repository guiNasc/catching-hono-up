import { pinoLogger } from "hono-pino";
import pino from "pino";
import PinoPretty from "pino-pretty";

import env from "@/env";

export function pLogger() {
  return pinoLogger({
    pino: pino({
      level: env.LOG_LEVEL || "info",
    }, env.NODE_ENV === "production" ? undefined : PinoPretty()),

  });
}
