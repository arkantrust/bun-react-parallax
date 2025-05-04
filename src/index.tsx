import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/*": index, // Serve index.html for all unmatched routes.
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
