import {z, ZodError} from "zod";
import { expand } from 'dotenv-expand';
import { config } from 'dotenv';

expand(config());

const EnvSchema = z.object({
    NODE_ENV: z.string().default("development"),
    PORT: z.coerce.number().default(8090),
    LOG_LEVEL: z.enum(["fatal" , "error" , "warn" , "info" , "debug" , "trace"])
});

export type env = z.infer<typeof EnvSchema>;

let env: env;

try {
    env = EnvSchema.parse(process.env);
} catch(e) {
    const error = e as ZodError;
    console.error("Invalid env:");
    console.error(z.prettifyError(error));
    process.exit(1);
}

export default env;