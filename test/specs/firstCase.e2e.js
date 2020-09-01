const MainPage = require('../pageobjects/mainPage.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should open the browser and insert flight information', () => {
        browser.maximizeWindow();
        MainPage.open();
        MainPage.getClosingSanJose().click();
        MainPage.searchingFlights("TXL", "LHR");
        browser.pause(2000);
       
    });
});


