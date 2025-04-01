import Vapi from "@vapi-ai/web";

<<<<<<< HEAD
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
=======
const webToken = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;
if (!webToken) {
  console.error(
    "NEXT_PUBLIC_VAPI_WEB_TOKEN is not defined in environment variables"
  );
  throw new Error(
    "NEXT_PUBLIC_VAPI_WEB_TOKEN is not defined in environment variables"
  );
}

let vapi: Vapi | null = null;

try {
  // Initialize Vapi with error handling
  vapi = new Vapi(webToken);

  // Add event listeners for debugging
  vapi.on("error", (error) => {
    console.error("Vapi client error:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
  });

  vapi.on("call-start", () => {
    console.log("Vapi client call started successfully");
  });

  vapi.on("call-end", () => {
    console.log("Vapi client call ended");
  });

  // Test the connection
  vapi.on("message", (message) => {
    console.log("Vapi client message received:", message);
  });
} catch (error) {
  console.error("Failed to initialize Vapi client:", {
    error,
    errorMessage: error instanceof Error ? error.message : "Unknown error",
    errorStack: error instanceof Error ? error.stack : undefined,
    webToken: webToken ? "present" : "missing",
  });
  throw error;
}

// Export a function to get the vapi instance with null check
export const getVapi = () => {
  if (!vapi) {
    throw new Error("Vapi client is not initialized");
  }
  return vapi;
};

// Export the vapi instance directly as well
export { vapi };
>>>>>>> daa1ba2 (Add your descriptive commit message here)
