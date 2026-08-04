import { defineConfig, devices } from "@playwright/test";

const testPort = process.env.INCI_TEST_PORT || "3107";
const testUrl = `http://127.0.0.1:${testPort}`;

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: "list",
  use: { baseURL: testUrl, trace: "retain-on-failure" },
  projects: [
    { name: "mobile-chromium", use: { ...devices["Pixel 5"] } },
    { name: "desktop-chromium", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: {
    command: `npm run dev -- --hostname 127.0.0.1 --port ${testPort}`,
    url: testUrl,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
