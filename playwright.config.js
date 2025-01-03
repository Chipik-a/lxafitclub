// @ts-check
//const { defineConfig, devices } = require('@playwright/test');
const {resolve} = require("node:path")
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '.env') });
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://lxafitclub.passion.io/',
    headless: false, //Отключаем headless-режим

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 500, // Замедлить выполнение для лучшего наблюдения
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: /globalSetup\.js/,
      // testDir: './tests/globalSetup.js',
    },
    // {
      // name: 'test login',
      // testMatch: /login\.js/,

      // dependencies: ['setup'],
      // use: {
      //   storageState: './storage/state.json',
      // }
    // },
    {
      name: 'test purchase',
      dependencies: ['setup'],
      use: {
        storageState: './storage/state.json',
      },
      teardown: 'teardown',
      // testDir: './tests/ui',
    },
    {
      name: 'teardown',
      testMatch: /testTeardown\.js/,
    }

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});


