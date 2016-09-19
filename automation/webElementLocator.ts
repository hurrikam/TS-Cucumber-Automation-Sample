import * as webdriver from 'selenium-webdriver';

export class WebElementLocator {

    private cssLocator: webdriver.Locator;

    public constructor(private _cssSelector: string, private _webDriver: webdriver.WebDriver) {
        if (!_cssSelector) {
            throw new Error("The '_cssSelector' parameter must be provided");
        }
        if (!_webDriver) {
            throw new Error("The '_webDriver' parameter must be provided");
        }
        this.cssLocator = webdriver.By.css(this.cssSelector);
    }

    public get cssSelector(): string {
        return this._cssSelector;
    }

    public get webDriver(): webdriver.WebDriver {
        return this._webDriver;
    }

    public waitFor(): webdriver.promise.Promise<webdriver.WebElement> {
        let webElementLocatedCondition = webdriver.until.elementLocated(this.cssLocator);
        return this.webDriver.wait(webElementLocatedCondition, 10000);
    }

    public find(): webdriver.WebElementPromise {
        return this.webDriver.findElement(this.cssLocator);
    }
}