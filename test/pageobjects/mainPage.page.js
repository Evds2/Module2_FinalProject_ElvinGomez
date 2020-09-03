const Page = require('./page');

class MainPage extends Page {
    
    get inputOriginLabel() {return $("//*[@data-test='SearchField-input']")}
    get typedAirportLabel() {return $("//*[@data-test='PlacePickerRow-wrapper']")}
    get inputClosingSanJose() {return $("//*[@data-test='PlacePickerInputPlace-close']")}
    //este xpath esta muy vulgar pero solo asi le pude llegar
    get inputDestinyLabel() {return $("//*[@id='landingPage']/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/input")}
    get selectedDepartureAirportLabel() {return $("//div[@data-test='PlacePickerRow-station']")}
    get inputDepartureLabel() {return $("//*[@data-test='SearchFieldDateInput']")}
    get inputArrivalLabel() {return $("//*[@name='search-inboundDate']")}
    get departureCalendarMoveNextButton() {return $("//*[@data-test='CalendarMoveNextButton']")}
    get departureDateBtn() {return $("//*[@data-value='2020-11-12']")}
    get arrivalDateBtn() {return $("//*[@data-value='2020-11-29']")}
    get establishDateBtn() {return $("//*[@data-test='SearchFormDoneButton']")}
    get passengersBtnLabel() {return $("//*[@data-test='PassengersField']")}
    get incrementAdultsPassengersBtn() {return $("//div[@data-test='PassengersRow-adults']//div[@class='StepperStateless__StyledStepper-dh3icj-0 evBPUx']//button[@aria-label='increment']")}
    get incrementChildrenPassengersBtn() {return $("//div[@data-test='PassengersRow-children']//div[@class='StepperStateless__StyledStepper-dh3icj-0 evBPUx']//button[@aria-label='increment']")}
    get incrementInfantsPassengersBtn() {return $("//div[@data-test='PassengersRow-infants']//div[@class='StepperStateless__StyledStepper-dh3icj-0 evBPUx']//button[@aria-label='increment']")}
    get confirmationOfPassengersBtn() {return $("//button[@data-test='PassengersFieldFooter-done']")}
    get searchButton() {return $("//a[@data-test='LandingSearchButton']")}

    getClosingSanJose(){
        return this.inputClosingSanJose;
    }

    getOriginLabel(){
        return this.inputOriginLabel;
    }

    getTypedAirportLabel(){
        return this.typedAirportLabel;
    }

    getDestinyLabel(){
        return this.inputDestinyLabel;
    }

    getSelectedDepartureAirport(){
        return this.selectedDepartureAirportLabel();
    }

    getDepartureLabel(){
        return this.inputDepartureLabel;
    }

    getArrivalLabel(){
        return this.inputArrivalLabel;
    }

    getCalendarMoveNextBtn(){
        return this.departureCalendarMoveNextButton;
    }

    getDepartureDateBtn(){
        return this.departureDateBtn;
    }
    
    getArrivalDateBtn(){
        return this.arrivalDateBtn;
    }

    getEstablishDateBtn(){
        return this.establishDateBtn;
    }

    getPassengersBtnLabel(){
        return this.passengersBtnLabel;
    }

    getAdultsPassengersIncrementBtn(){
        return this.incrementAdultsPassengersBtn;
    }

    getChildrenPassengersIncrementBtn(){
        return this.incrementChildrenPassengersBtn;
    }

    getInfantsPassengersIncrementBtn(){
        return this.incrementInfantsPassengersBtn;
    }

    getConfirmationPassengersBtn(){
        return this.confirmationOfPassengersBtn;
    }

    getSearchButton(){
        return this.searchButton;
    }

    movingNextInCalendarFunction(){
        for (var i = 0; i < 3; i++) {
            this.getCalendarMoveNextBtn().click();
            i++;
        }
    }

    insertingChildrenFunction(){
        for(var i = 0; i < 5; i++){
            this.getChildrenPassengersIncrementBtn().click();
            i++;
        }
    }
    
    insertingInfantsFunction(){
        for(var i = 0; i < 3; i++){
            this.getInfantsPassengersIncrementBtn().click();
            i++;
        }
    }

    insertingNumberOfPassengers(){
        this.getPassengersBtnLabel().click();
        this.getAdultsPassengersIncrementBtn().click();
        this.insertingChildrenFunction();
        this.insertingInfantsFunction();
        this.getConfirmationPassengersBtn().click();
    }

    searchingFlights(departure, arrival){
        this.inputOriginLabel.setValue(departure);
        this.getTypedAirportLabel().click();
        this.inputDestinyLabel.setValue(arrival);
        //this.getSelectedDepartureAirport().click();
        browser.pause(2000);
        browser.keys("\uE007"); 
        this.getDepartureLabel().click();
        this.movingNextInCalendarFunction();
        this.getDepartureDateBtn().click();
        this.getArrivalDateBtn().click();
        this.getEstablishDateBtn().click();
        this.getSearchButton().click();

    }
  
}

module.exports = new MainPage();