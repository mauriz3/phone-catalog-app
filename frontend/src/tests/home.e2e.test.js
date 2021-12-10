import puppeteer from "puppeteer";

describe("Home page tests", () => {
  let browser;
  let page;
  const debug = true;
  const baseURL = `http://${debug ? '127.0.0.1:3000' : '0.0.0.0'}/`;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  test("home nav is present", async () => {
    await page.goto(baseURL);
    await page.waitForSelector("#navlink-login");
  });

  test("phone modal can be open and closed", async () => {
    await page.goto(baseURL);
    await page.setViewport({ width: 2000, height: 768});
    await page.waitForSelector("#navlink-login");
    let selector = "div.justify-content-center.mt-4.row > div > button";
    await page.waitForSelector(selector);
    await page.click(selector);
    await page.waitForSelector("#modal-title");
    selector = "div.modal-header > button"
    await page.waitForSelector(selector);
    await page.click(selector);
    await page.waitForSelector("#navlink-login");
  });

  test("click on login go to the login page", async () => {
    await page.goto(baseURL);
    await page.waitForSelector("#navlink-login");
    await page.click('#navlink-login')
    await page.waitForSelector("#login-title");
  });

  test("click on signup go to the signup page", async () => {
    await page.goto(baseURL);
    await page.click('#navlink-signup')
    await page.waitForSelector("#signup-title");
  });

  afterAll(() => browser.close());
});