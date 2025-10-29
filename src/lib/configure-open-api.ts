import type { AppOpenAPI } from "./types";
import packageJSON from "../../package.json";
import { apiReference, Scalar } from "@scalar/hono-api-reference";

export default function ConfigureOpenAPI(app: AppOpenAPI) {
    app.doc("/doc", {
        openapi: "3.0.0",
        info: {
            version: packageJSON.version,
            title: "Tasks API"
        }
    });

    app.get(
        "/reference",
        Scalar({
            url: "/doc",
           theme: "moon",
           defaultHttpClient: {
            targetKey: "node",
            clientKey: "fetch",
           } 
        }),
    );
}