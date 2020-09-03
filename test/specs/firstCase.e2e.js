const MainPage = require('../pageobjects/mainPage.page');
const ResultPage = require('../pageobjects/resultPage.page');


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
        expect(browser).toHaveUrl('https://www.kiwi.com/es/buscar/results/aeropuerto-de-berlin-tegel-berlin-alemania/aeropuerto-de-londres-heathrow-londres-reino-unido/2020-11-12/2020-11-29?adults=2&children=3&infants=2');
        expect(ResultPage.getResultWrapperCard()).toBeDisplayed();
       
    });
});


