module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx)",
    "**/?(*.)+(spec|test).+(ts|tsx)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
