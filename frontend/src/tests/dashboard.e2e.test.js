import puppeteer from "puppeteer";

describe("Dashboard page tests", () => {
  let browser;
  let page;
  const debug = false;
  const baseURL = `http://${debug ? '127.0.0.1:3000' : '0.0.0.0'}/`;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  test("Logged username is present", async () => {
    await page.goto(baseURL + 'login');
    await page.click("#username");
    await page.type("#username", "testUser");
    await page.click("#password");
    await page.type("#password", "passwordUser");
    await page.click("#login-button");

    await page.waitForSelector("#navbar-username");
    const text = await page.$eval("#navbar-username", (e) => e.textContent);
    expect(text).toContain("testUser");
  });


  test("phone modal can be open and closed", async () => {
    await page.setViewport({ width: 2000, height: 768});
    await page.waitForSelector("#navbar-username");
    let selector = "div.justify-content-center.mt-4.row > div > button";
    await page.waitForSelector(selector);
    await page.click(selector);
    await page.waitForSelector("#modal-title");
    selector = "div.modal-header > button"
    await page.waitForSelector(selector);
    await page.click(selector);
    await page.waitForSelector("#navbar-username");
  });

  test("click on logout redirects to the home", async () => {
    await page.click('#navlink-logout')
    await page.waitForSelector("#navlink-login");
  });

  afterAll(() => browser.close());
});