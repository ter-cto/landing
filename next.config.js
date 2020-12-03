const {
    withModuleFederation,
    MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
    webpack: (config, options) => {
        const { buildId, dev, isServer, defaultLoaders, webpack } = options;
        const mfConf = {
            name: "landing",
            library: { type: config.output.libraryTarget, name: "landing" },
            filename: "static/runtime/remoteEntry.js",
            remotes: {},
            exposes: {
                "./HeaderBar": "./components/HeaderBar",
                "./Footer": "./components/Footer",
            },
            shared: [],
        };

        // Configures ModuleFederation and other Webpack properties
        withModuleFederation(config, options, mfConf);

        config.plugins.push(new MergeRuntime());

        if (!isServer) {
            config.output.publicPath = "http://localhost:4000/_next/";
        }

        return config;
    },
};