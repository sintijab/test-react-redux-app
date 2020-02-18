module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  coverageReporters: ["json", "html"],
  coverageDirectory: 'tests/coverage',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    },
    "./src/components/": {
      branches: 40,
      statements: 40
    },
    "./src/reducers/**/*.js": {
      statements: 90
    },
    "./src/api/very-important-module.js": {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
