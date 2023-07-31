import { browser, element, by, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Rent Home Demo Web', () => {

  const page = new AppPage();

  beforeEach(() => browser.get(''));

  it('should display correct title', async () => {
    const text = await page.getTitleText();
    expect(text).toBe('Rent Homes');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
