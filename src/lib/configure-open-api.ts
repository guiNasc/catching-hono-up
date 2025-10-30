import { apiReference, Scalar } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import packageJSON from "../../package.json";

export default function ConfigureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Tasks API",
    },
  });

  app.get(
    "/reference",
    Scalar({
      url: "/doc",
      theme: "moon",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "node",
        clientKey: "fetch",
      },
    }),
  );
}
