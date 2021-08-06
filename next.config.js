const path = require('path')

module.exports = {
    target: 'serverless',
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "globals.scss";`,
    },
}
