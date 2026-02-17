import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'tr', 'de'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(tr|en|de)/:path*']
};
