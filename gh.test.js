let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    await page.setDefaultTimeout(50000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  });

  test("The first link attribute", async () => {
    await page.setDefaultTimeout(50000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.setDefaultTimeout(50000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });
});

describe("Github security page test", () => {

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/features/security");
  });

  afterEach(() => {
    page.close();
  });
  
  test("h1 security text", async () => {
    await page.setDefaultTimeout(50000);
    const h1 = "div div div h1";
    const h1Text = await page.$eval(h1, elem => elem.textContent);
    expect(h1Text).toEqual("Secure at every\u00A0step");
  });

  test("h4 test", async () => {
    await page.setDefaultTimeout(50000);
    const h4Span = "div div div h4 span";
    const h4SpanText = await page.$eval(h4Span, elem => elem.textContent);
    expect(h4SpanText).toEqual("Ship secure applications within the GitHub flow");
  });

  test("Button text test", async () => {
    await page.setDefaultTimeout(50000);
    const headerEl = "div main div div a";
    const elementText = await page.$eval(headerEl, elem => elem.textContent);
    expect(elementText).toEqual("Security");
 });
});