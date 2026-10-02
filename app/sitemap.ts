import type {MetadataRoute} from 'next';
import {siteUrl} from '../lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return [
    {
      url: siteUrl.toString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL('/privacy-policy', siteUrl).toString(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}