import express from "express";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

export function start() {
  app.get("/health", (_, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.get("/version", (_, res) => {
    res.json({ version: "1.0.0" });
  });

  app.listen(PORT, () => {
    console.log(`🌐 API running on port ${PORT}`);
  });
}

start();
