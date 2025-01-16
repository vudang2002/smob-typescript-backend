import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Sử dụng ts-jest
  testEnvironment: 'node', // Môi trường chạy Jest
  extensionsToTreatAsEsm: ['.ts'], // Xử lý file TypeScript dưới dạng ESM
  globals: {
    'ts-jest': {
      useESM: true, // Bật chế độ ESM cho Jest
    },
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true, // Áp dụng ESM cho tất cả các file test
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js'], // Các extension được hỗ trợ
};

export default config;
