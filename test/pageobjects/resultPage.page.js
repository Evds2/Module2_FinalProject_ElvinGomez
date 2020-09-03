const Page = require('./page');

class ResultPage extends Page {
    get resultWrapper() {return $("//div[@data-test='ResultCardWrapper']")};
    get resultsOfAvailableTrips() {return $("//div[@class='transition-results']")}
    get filterOnlyByAircraftBtn() {return $("//*[@class='Checkbox__IconContainer-sc-1x6twh3-0 ipOrEF']")}
    get filterOnlyByTrainBtn() {return $("//*[@class='Checkbox__IconContainer-sc-1x6twh3-0 ipOrEF']")[2]}
    get filterOnlyByBusBtn() {return $('/html/body/div[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div/div[2]/div/button/div/div')}

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


}



module.exports = new ResultPage();
