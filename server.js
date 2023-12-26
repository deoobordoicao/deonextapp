const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define custom routes or middleware before the Next.js handler

  // Next.js request handler
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start the Express server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
