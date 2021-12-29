const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    reactStrictMode: true,
    assetPrefix: !debug ? 'https://nishitsarvaiya.github.io/react-woodone/' : '',
};
