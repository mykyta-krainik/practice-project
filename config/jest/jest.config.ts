export default {
  clearMocks: true,

  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  rootDir: '../../',

  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],

  testPathIgnorePatterns: [
    '/node_modules/',
  ],

  verbose: true,
};
