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
        browser.setTimeout({'implicit': 3000});
        //ResultPage.getFilterOnlyByBusBtn().click();
        //expect(ResultPage.getAlertOfNoResults()).toBeDisplayed();
    });
})

describe('filter to train', () => {
    it('should add train filter to validate trips', () => {
        browser.setTimeout({'implicit': 3000});
        //ResultPage.getFilterOnlyByTrain().click();
        //expect(ResultPage.getAlertOfNoResults().toBeDisplayed());
    });
})