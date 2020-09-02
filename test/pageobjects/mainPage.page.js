const Page = require('./page');

class MainPage extends Page {
    
    get inputOriginLabel() {return $("//*[@data-test='SearchField-input']")}
    get typedAirportLabel() {return $("//*[@data-test='PlacePickerRow-wrapper']")}
    get inputClosingSanJose() {return $("//*[@data-test='PlacePickerInputPlace-close']")}
    //este xpath esta muy vulgar pero solo asi le pude llegar
    get inputDestinyLabel() {return $("//*[@id='landingPage']/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/input")}
    get selectedDepartureAirportLabel() {return $()}
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
        this.getSelectedDepartureAirport().click();
        this.getDepartureLabel().click();
        this.movingNextInCalendarFunction();
        this.getDepartureDateBtn().click();
        this.getArrivalDateBtn().click();
        this.getEstablishDateBtn().click();

    }
  
}

module.exports = new MainPage();