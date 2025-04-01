export const config = {
  vapi: {
    webToken: process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN,
    workflowId: process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID,
  },
} as const;
