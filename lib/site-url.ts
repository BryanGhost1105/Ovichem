const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const developmentSiteUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : undefined;
const resolvedSiteUrl = configuredSiteUrl
  ?? (vercelProductionHost ? `https://${vercelProductionHost}` : undefined)
  ?? developmentSiteUrl;

export const siteUrl = resolvedSiteUrl ? new URL(resolvedSiteUrl) : undefined;