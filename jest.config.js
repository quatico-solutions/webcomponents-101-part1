module.exports = {
    preset: "ts-jest",
    collectCoverageFrom: ["src/**/*.ts"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["index.ts", "test/*", "vite*"],
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.test.json",
        },
    },
    moduleFileExtensions: ["ts", "js", "json", "node"],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/test/helper/styleMock.ts",
    },
    snapshotSerializers: ["@quatico/dom-serializer/bin/serializer"],
    testRegex: ".*spec\\.(js|ts)$",
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        url: "http://localhost/",
    },
    transform: {
        "^.+\\.(js|ts)$": "ts-jest",
    },
    resetMocks: true,
    transformIgnorePatterns: ["node_modules/(?!@lit|lit)"],
};
