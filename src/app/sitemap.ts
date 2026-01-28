import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://seegodesign.com';

const routes = [
  '/',
  '/about',
  '/services',
  '/services/accessibility-compliance',
  '/services/app-development',
  // '/services/branding',
  // '/services/custom-chat-bots',
  // '/services/e-commerce-systems',
  // '/services/system-overhaul',
  '/services/web-design',
  '/services/website-optimization',
  '/services/wordpress-development',
  '/tools',
  '/tools/accessibility-fix-priorities',
  '/tools/app-decision-tool',
  '/tools/website-fix-priorities',
  '/contact',
  '/book-a-call',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
