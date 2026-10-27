const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const developmentSiteUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : undefined;
const resolvedSiteUrl = configuredSiteUrl
  ?? developmentSiteUrl
  ?? 'https://www.ovichem.ng';

export const siteUrl = new URL(resolvedSiteUrl);