module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
    ],
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": `<rootDir>/__mocks__/file-mock.js`,
        "^@/components/(.*)$": "<rootDir>src/components/$1",
        "^@/context/(.*)$": "<rootDir>src/context/$1",
        "^@/layouts/(.*)$": "<rootDir>src/layouts/$1",
        "^@/assets/(.*)$": "<rootDir>src/assets/$1",
        "^@/services/(.*)$": "<rootDir>src/services/$1",
        "^@/types/(.*)$": "<rootDir>src/types/$1",
        "^@/actions/(.*)$": "<rootDir>src/services/actions/$1",
        "^@/constants/(.*)$": "<rootDir>src/services/constants/$1",
        "^@/reducers/(.*)$": "<rootDir>src/services/reducers/$1",
        "^@/utils/(.*)$": "<rootDir>src/services/utils/$1",
        "^@/hooks/(.*)$": "<rootDir>src/services/hooks/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
};
