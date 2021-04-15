const withPlugins = require("next-compose-plugins");

const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
    ja: "ja",
    en: "en",
};

const config = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
    distDir: "build",
};

module.exports = withPlugins([], config);
