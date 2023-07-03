module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,   // ext. of mjs or js to be tested by babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
};
