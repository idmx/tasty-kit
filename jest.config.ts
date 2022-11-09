import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  "verbose": true,
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ],
  "preset": "ts-jest",
  "testEnvironment": "node"
};

export default config;