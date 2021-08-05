module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
    coverageReporters: ['lcov', 'text'],
    coverageDirectory: './__tests__/coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'v8',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
}
