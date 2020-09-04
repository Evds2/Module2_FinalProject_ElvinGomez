const MainPage = require('../pageobjects/mainPage.page');
const ResultPage = require('../pageobjects/resultPage.page');
const PassengerDetails = require('../pageobjects/passengerDetails.page')
const TicketFare = require('../pageobjects/ticketFare.page')

describe('inserting passenger info', () => {
    it('should click on booking now button and insert info about passenger', () => {
        browser.maximizeWindow();
        MainPage.open3rdTest();
        ResultPage.getBookingNowBtn().click();
        browser.setTimeout({'implicit': 5000});
        PassengerDetails.insertingInfoFunction('ab332sc@gmail.com', '224455', 'Elvin', 'Gomez', '14', '1995', 'ABIE821829BKKE', '24', '2024');
    });
})

describe('choosing the ticket fare', () => {
    it('should select the ticket and its packets', () =>{
        browser.setTimeout({'implicit': 3000});
        TicketFare.bookingAFlightFunction();
        expect(browser).toHaveUrl('https://www.kiwi.com/us/booking?%3FbackToSearchUrl=https%3A%2F%2Fwww.kiwi.com%2Fus%2Fsearch%2Fresults%2Fberlin-tegel-berlin-germany%2Flondon-united-kingdom%2F2020-10-01_2020-10-31%2F2020-10-01_2020-10-31&activeStep=3&currency=usd&direct=true&flightsId=1aae22f548760000c0b0013b_0-22f51aae488400007c1461ba_0&handBags=0&holdBags=2&locale=us&passengers=1&price=85.22&searchType=return&token=AFpgOkQkJRoiFFzZ0vxxgrTKHs36xLbaC5gdsUocOLchG6z99qYYCAxd2bXNS-vNZPWdhjt0kBEqLdfyIj0-QS_kKCejIt4CIXUky_pnw-MjAl3zHiPIw6HNfu5cC2zu2segRtEGkX0lDSIl23SW_jaDW_8-mbxvNEpYoDcRLsHw6gRPu6mhvO8hEttbyG2hGF_34tbziRCb2LyGqMLAqzZcmYrRSqnuxdl7KhKQH_XBfh092OhdkdrTVz2kzNwNO2ThQQzs9YkKETCOL9s_ubnj-8IXgo_79yp77kjdQ2wY24lbyCM0S8DSMjfUZLqFipDBT3iJzCBq5VHLvZxc4t_5tyLFSE3iYrhLjhBh-WkwHQIgZFYiUC42awv7WH9AhEVpydtSBV8bvg6pX6K-HSRVOLlYWjWTcCqWtGsDYZk4orGVz7Tz-cH64erMliG-GHqCW0ttTETm515VxgGe_yEb6foWObSOyJdeXSByhg81V1SqqXEWdy0XH1CM0UealKHfbfTDfDGdb7yNXvm3JCyaAu2jtTtT1VdHSvXHGnCitq-b6h-apToZmfHzbR4DXo3XhXJ7PFXdK1alwQoyJEta-UPVk0JAdevhpEJBJ616Dg9z2njG3Z7GmqZuhqHCCt_5wnGabwBdXg5SDBlrKN2p6tHaqerDzWwgjESNHA0bsZdCPnnPOQC6POaHtgf8SbYA1yWK0Xbyg720cpTHV2yv_od2qQfc06kXTq_j0AcU7YCYYROXVgBSG7bSZw15ml0FeS0thQhls3t5QRxWG74HAVk45ImIYun4oXeO7v_Y%3D');
        expect(TicketFare.getPassengerInfoConfirmation().toBeDisplayed());
    });
})

