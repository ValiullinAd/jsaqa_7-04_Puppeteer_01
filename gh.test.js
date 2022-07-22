let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  }, 50000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 50000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  }, 50000);
});

describe("Github security page test", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/features/security");
  });
  
  test("h1 support text", async () => {
    const h1 = "div div div h1";
    const h1Text = await page.$eval(h1, elem => elem.textContent);
    expect(h1Text).toEqual("Secure at every\u00A0step");
  }, 50000);

  test("h4 test", async () => {
    const h4Span = "div div div h4 span";
    const h4SpanText = await page.$eval(h4Span, elem => elem.textContent);
    expect(h4SpanText).toEqual("Ship secure applications within the GitHub flow");
  }, 50000);

  test("Button text test", async () => {
    const headerEl = "div main div div a";
    const elementText = await page.$eval(headerEl, elem => elem.textContent);
    expect(elementText).toEqual("Security");
 }, 50000);
});

describe("Github support page test", () => {

  beforeEach(async () => {
    await page.goto("https://support.github.com/");
  });
  
   test("h3 page test", async () => {
    const h3Text = "div h3";
    const h3ElText = await page.$eval(h3Text, elem => elem.textContent);
    expect(h3ElText).toEqual("Virtual Assistant");
  }, 50000);

});
