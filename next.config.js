const path = require('path')
const Dotenv = require('dotenv-webpack')
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const FRONTEND_DIR = process.env.FRONTEND_DIR

module.exports = withPlugins([[withSass], [withImages]], {
    webpack: config => {
        config.plugins = config.plugins || []
        config.plugins = [
            ...config.plugins,
            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ]
        config.resolve.modules.push(path.resolve("./" + FRONTEND_DIR));
        // config.module.rules.push({
        //     include: path.resolve(__dirname, '../' + FRONTEND_DIR),
        //   });

        return config
    }
});