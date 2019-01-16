module.exports = {
  // Setup
  // ---------------
  preset: 'ts-jest',

  // Paths
  // ---------------
  roots: ['<rootDir>/src/'],
  testMatch: ['**/*.test.ts'],

  // Coverage
  // ---------------
  coveragePathIgnorePatterns: ['/node_modules/', '/*.d.ts/'],

  globals: {
    // ts-jest configuration
    // ---------------
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};
