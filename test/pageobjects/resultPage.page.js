const Page = require('./page');

class ResultPage extends Page {
    get resultWrapper() {return $("//div[@data-test='ResultCardWrapper']")};

    getResultWrapperCard(){
        return this.resultWrapper;
    }
}



module.exports = new ResultPage();
