const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compress: true,
  poweredByHeader: false,
});
