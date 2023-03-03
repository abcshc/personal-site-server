/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  testRegex: ".*spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  verbose: true,
};
