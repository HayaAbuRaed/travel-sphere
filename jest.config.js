export default {
  preset: "ts-jest",
  testEnvironment: "node",
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    // "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "/node_modules/(?!(@react-leaflet|react-leaflet)/)",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.app.json",
    },
  },
};
