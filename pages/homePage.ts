import * as automation from '../automation/webElementLocator';

module HomePageCssSelectors {

    export const PAGE = '#skycom_homepage';
    export const FIND_AND_WATCH_LINK = '[data-id="skycom-find-and-watch"]';
}

export class HomePage extends automation.WebElementLocator {

    private findAndWatchLinkLocator: automation.WebElementLocator;

    public constructor(webDriver: webdriver.WebDriver) {
        super(HomePageCssSelectors.PAGE, webDriver);
        this.findAndWatchLinkLocator = new automation.WebElementLocator(HomePageCssSelectors.FIND_AND_WATCH_LINK, webDriver);
    }

    public getFindAndWatchLink(): webdriver.WebElementPromise {
        return this.findAndWatchLinkLocator.find();
    }
}
