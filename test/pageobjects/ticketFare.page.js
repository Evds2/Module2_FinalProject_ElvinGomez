const Page = require('./page');

class TicketFare extends Page {
    get continueWithStandardBtn() {return $("//*[@data-test='fareTypesStandardButton']")}
    get typeOfServicesOfKiwiBtn() {return $("//*[@data-test='servicePackagesPlusPricingTableItem']")};
    get typeOfSeatAtAirplaneBtn() {return $("//*[@data-test='SeatingSelectOptionDesktop-extraLegroom']")}
    get airHelpAitAirplaneBtn() {return $("//*[@data-test='AirHelpAncillary-buy-btn']")}
    get continueBtn() {return $("//*[@data-test='StepControls-AdditionalService-next']//*[@class='ButtonPrimitiveContentChildren__StyledButtonPrimitiveContentChildren-xn0ytv-0 eQYvwc']")}
    get passengerInfoConfirmation() {return $("//*[@class='PassengersOverview__PassengersOverviewWrapper-h152xh-0 bnOLXU']")}
    

    getContinueBtn(){
        return this.continueWithStandardBtn;
    }

    getTypeOfServices(){
        return this.typeOfServicesOfKiwiBtn;
    }

    getTypeOfSeatAtAirplane(){
        return this.typeOfSeatAtAirplaneBtn;
    }

    getAirHelpAtAirplaneBtn(){
        return this.airHelpAitAirplaneBtn;
    }

    getContinueBtn(){
        return this.continueBtn;
    }
    

    getPassengerInfoConfirmation(){
        return this.passengerInfoConfirmation;
    }

    bookingAFlightFunction(){
        this.getContinueBtn().click();
        browser.setTimeout({'implicit': 3000});
        this.getTypeOfServices().click();
        this.getTypeOfSeatAtAirplane().click();
        this.getAirHelpAtAirplaneBtn().click();
        browser.setTimeout({'implicit': 3000});
        this.continueBtn().click();
    }

    

}


module.exports = new TicketFare();