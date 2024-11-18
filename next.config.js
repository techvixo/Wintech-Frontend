const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["145.223.21.187"], 
      },
};
 
module.exports = withNextIntl(nextConfig);
