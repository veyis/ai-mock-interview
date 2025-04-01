"use client";

import Vapi from "@vapi-ai/web";

let vapiInstance: Vapi | null = null;

export function getVapiInstance() {
  if (!vapiInstance) {
    if (typeof window !== "undefined") {
      const token = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;
      if (!token) {
        console.error("Vapi web token is not set");
        return null;
      }

      vapiInstance = new Vapi(token);

      // Add error handling
      vapiInstance.on("error", (error: Error) => {
        console.error("Vapi client error:", error);
      });

      // Add message handling
      vapiInstance.on("message", (message: any) => {
        console.log("Vapi message:", message);
      });
    }
  }
  return vapiInstance;
}

// Cleanup function
export function cleanupVapiInstance() {
  if (vapiInstance) {
    vapiInstance = null;
  }
}
