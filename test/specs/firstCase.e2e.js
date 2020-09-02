const MainPage = require('../pageobjects/mainPage.page');
const SecurePage = require('../pageobjects/secure.page');


describe('Insert numbers of passengers', () => {
    it('should open the browser and insert the quantity of passengers', () => {
        browser.maximizeWindow();
        MainPage.open();
        MainPage.insertingNumberOfPassengers();
    });
})



describe('Booking a familiar flight', () => {
    it('should insert flight information', () => {
        MainPage.getClosingSanJose().click();
        MainPage.searchingFlights("TXL", "LHR");
        browser.pause(2000);
       
    });
});


