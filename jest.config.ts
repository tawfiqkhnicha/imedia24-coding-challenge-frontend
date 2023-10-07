module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/src/components'],
    testMatch: ["**/?(*.)+(test).tsx"],
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
  };
  