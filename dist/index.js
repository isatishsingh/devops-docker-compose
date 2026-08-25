import express from "express";
import { prisma } from "./prisma.js";
const app = express();
// get endpoint
app.get("/", async (req, res) => {
    const data = await prisma.user.findMany();
    res.json({
        data,
    });
});
// post endpoint
app.post("/", async (req, res) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
});
app.listen(3000, () => {
    console.log("listening  port 3000");
});
//# sourceMappingURL=index.js.map