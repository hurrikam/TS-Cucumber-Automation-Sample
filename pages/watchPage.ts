import * as automation from '../automation/webElementLocator';

module WatchPageCssSelectors {

    export const PAGE = '[data-id="watch"]';
}

export class WatchPage extends automation.WebElementLocator {

    public constructor(webDriver: webdriver.WebDriver) {
        super(WatchPageCssSelectors.PAGE, webDriver);
    }
}
