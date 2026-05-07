import { Hono } from "hono"
import { AppType } from "../shared/types"

const upload = new Hono<AppType>();

upload.post("/", async (c) => {

    return c.json({
        message: "Mockup endpoint"
    }, 200)
});

export default upload;