const path = require('path');
const webpack = require('webpack');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        configure: {
            resolve: {
                fallback: {
                    process: require.resolve('process/browser'),
                    zlib: require.resolve('browserify-zlib'),
                    stream: require.resolve('stream-browserify'),
                    util: require.resolve('util'),
                    buffer: require.resolve('buffer'),
                    assert: require.resolve('assert'),
                    crypto: require.resolve('crypto-browserify'),
                },
            },
            plugins: [
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                    process: 'process/browser',
                }),
            ],
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        resolve: {
                            fullySpecified: false,
                        },
                    },
                ],
            },
        },
    },
};
