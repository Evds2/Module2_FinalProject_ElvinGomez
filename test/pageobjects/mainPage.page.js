const Page = require('./page');

class MainPage extends Page {
    
    get inputOriginLabel() {return $("//*[@data-test='SearchField-input']")}
    get typedAirportLabel() {return $("//*[@data-test='PlacePickerRow-wrapper']")}
    get inputClosingSanJose() {return $("//*[@data-test='PlacePickerInputPlace-close']")}
    get inputDestinyLabel() {return $("//*[@id='landingPage']/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/input")}
    get selectedDepartureAirportLabel() {return $('.PlacePickerstyled__PlacePickerItemName-hrtzfp-6 jVKPfo=LHR Londres - Aeropuerto de Londres-Heathrow')}
    get inputDepartureLabel() {return $("//*[@data-test='SearchFieldDateInput']")}
    get inputArrivalLabel() {return $("//*[@name='search-inboundDate']")}
    get departureCalendarMoveNextButton() {return $("//*[@data-test='CalendarMoveNextButton']")}
    get departureDateBtn() {return $("//*[@data-value='2020-11-12']")}
    get arrivalDateBtn() {return $("//*[@data-value='2020-11-29']")}
    get establishDateBtn() {return $("//*[@data-test='SearchFormDoneButton']")}

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

    movingNextInCalendarFunction(){
        for (var i = 0; i < 3; i++) {
            this.getCalendarMoveNextBtn().click();
            i++;
        }
    }

    searchingFlights(departure, arrival){
        this.inputOriginLabel.setValue(departure);
        this.getTypedAirportLabel().click();
        browser.pause(2000);
        this.inputDestinyLabel.setValue(arrival);
        this.getSelectedDepartureAirport().click();
        browser.pause(2000);
        this.getDepartureLabel().click();
        this.movingNextInCalendarFunction();
        this.getDepartureDateBtn().click();
        this.getArrivalDateBtn().click();
        this.getEstablishDateBtn().click();

    }
  
}

module.exports = new MainPage();