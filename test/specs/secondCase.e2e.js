const MainPage = require('../pageobjects/mainPage.page');
const ResultPage = require('../pageobjects/resultPage.page');

describe('filters in result page', () => {
    it('should validate that there are results in the webpage', () => {
        browser.maximizeWindow();
        MainPage.open2ndTest();
        browser.setTimeout({'implicit': 3000});
        expect(ResultPage.getResultsOfAvailableTrips()).toBeDisplayed();
    });
})

describe('filter to bus', () => {
    it('should filter to bus and validate that there are no trips', () => {
        browser.pause(6000);
        ResultPage.getFilterOnlyByBusBtn().click();
        browser.pause(2000);
    });
})