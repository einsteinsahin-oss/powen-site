const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  images: {
    unoptimized: false,
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
});
