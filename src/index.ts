import { Hono } from "hono";
import { AppType } from "./shared/types";

const app = new Hono<AppType>()

export default app;