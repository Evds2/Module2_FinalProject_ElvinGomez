const Page = require('./page');

class ResultPage extends Page {
    get resultWrapper() {return $("//div[@data-test='ResultCardWrapper']")};
    get resultsOfAvailableTrips() {return $("//div[@class='transition-results']")}
    get filterOnlyByAircraftBtn() {return $('')}
    get filterOnlyByTrainBtn() {return $('')}
    get filterOnlyByBusBtn() {return $('')}
    get noResultsAlert() {return $('.Heading__StyledHeading-sc-1b8cso5-0 fGFWje=No hay resultados para esta búsqueda')}
    get bookingNowBtn() {return $("//*[@data-test='BookingButton']")}

    getResultWrapperCard(){
        return this.resultWrapper;
    }

    getResultsOfAvailableTrips(){
        return this.resultsOfAvailableTrips;
    }

    getFilterOnlyByAircraft(){
        return this.filterOnlyByAircraftBtn;
    }

    getFilterOnlyByTrain(){
        return this.filterOnlyByTrainBtn;
    }

    getFilterOnlyByBusBtn(){

        return this.filterOnlyByBusBtn;
    }

    getAlertOfNoResults(){
        return this.noResultsAlert;
    }

    getBookingNowBtn(){
        return this.bookingNowBtn;
    }


}



module.exports = new ResultPage();
