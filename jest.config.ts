module.exports = {
    preset: 'ts-jest', 
    testEnvironment: 'node', 
    testMatch: ['**/test/**/*.test.ts'], 
    moduleFileExtensions: ['ts', 'js'], 
    transform: {
      '^.+\\.tsx?$': 'ts-jest', 
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], 
  };