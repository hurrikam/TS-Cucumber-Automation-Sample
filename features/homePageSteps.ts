import * as webdriver from 'selenium-webdriver';
import { binding, before, given, when, then } from 'cucumber-tsflow';
import * as pages from '../pages';

const testUrl = 'https://www.sky.com';
const browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
const homePage = new pages.HomePage(browser);
const watchPage = new pages.WatchPage(browser);

@binding()
export default class HomePageSteps {

    @before()
    public async beforeAllScenarios(): Promise<void> {
        await browser.get(testUrl);
    }

    @given(/I am on SKY\.com home page/)
    public async GivenIAmOnWatchMovies(): Promise<void> {
        await homePage.waitFor();
    }

    @when(/I click the 'Find & Watch TV' link/)
    public async WhenIClickFindAndWatch(): Promise<void> {
        let link = await homePage.getFindAndWatchLink();
        await link.click();
    }

    @then(/the 'Watch' page is displayed/)
    public async ThenWatchPageIsDisplayed(): Promise<void> {
        await watchPage.waitFor();
    }
}
