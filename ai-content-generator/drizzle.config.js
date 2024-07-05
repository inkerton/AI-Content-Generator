/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Ai-content-generator_owner:7CRTEQvgm0PZ@ep-shiny-breeze-a51336ag.us-east-2.aws.neon.tech/Ai-content-generator?sslmode=require',
    }
  };