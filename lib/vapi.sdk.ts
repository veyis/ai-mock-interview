import Vapi from "@vapi-ai/web";

// Check if we're in a browser environment
const isBrowser = typeof window !== "undefined";

// Get the web token from environment variables
const webToken = isBrowser ? process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN : null;

if (!webToken) {
  console.error(
    "NEXT_PUBLIC_VAPI_WEB_TOKEN is not defined in environment variables"
  );
  throw new Error(
    "NEXT_PUBLIC_VAPI_WEB_TOKEN is not defined in environment variables"
  );
}

// Validate token format
if (!webToken.startsWith("vapi_")) {
  console.error(
    "Invalid Vapi web token format. Token should start with 'vapi_'"
  );
  throw new Error("Invalid Vapi web token format");
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
      token: webToken ? "present" : "missing",
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
    isBrowser,
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
