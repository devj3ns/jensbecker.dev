import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// TODO: add /healthcheck route for railway

const start = async () => {
  const port = process.env.PORT || 3000;

  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(
        `Payload Admin URL: http://localhost:${port}${payload.getAdminURL()}`
      );
    },
  });

  // Add your own express routes here

  app.listen(port);
};

start();
