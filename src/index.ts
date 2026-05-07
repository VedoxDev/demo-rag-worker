import { Hono } from "hono";
import { AppType } from "./shared/types";
import upload from "./routes/upload";

const app = new Hono<AppType>()

app.route("/upload", upload)

export default app;