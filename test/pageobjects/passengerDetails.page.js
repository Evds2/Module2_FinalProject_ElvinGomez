const Page = require('./page');

class PassengerDetails extends Page {
    get inputEmailLabel() {return $("//*[@name='email']")}
    get inputNumberLabel() {return $("//*[@name='phone']")}
    get inputFirstnameLabel() {return $("//*[@name='firstname']")}
    get inputLastnameLabel() {return $("//*[@name='lastname']")}
    get nationalityLabel() {return $("//*[@data-test='ReservationPassenger-nationality']")}
    get costaRicaLabelDropDownSelector() {return $("//*[@data-test='ReservationPassenger-nationality']//*[@value='cr']")}
    get genderDropDownSelector() {return $("//*[@class='Select__SelectContainer-sc-6agypz-2 fEOMBP']//select[@class='Select__StyledSelect-sc-6agypz-1 iEpmGX']")}
    get selectMaleFromDropDown() {return $("//*[@class='Select__SelectContainer-sc-6agypz-2 fEOMBP']//select[@class='Select__StyledSelect-sc-6agypz-1 iEpmGX']//*[@value='mr']")}
    get dateOfBirthDropdown() {return $("//*[@class='Select__SelectContainer-sc-6agypz-2 fEOMBP']//select[@name='birthMonth']")}
    get septemberMonthSelector() {return $("//*[@class='Select__SelectContainer-sc-6agypz-2 fEOMBP']//select[@name='birthMonth']//*[@value='09']")}
    get birtdayInputLabel() {return $("//*[@name='birthDay']")}
    get birthYearInputLabel() {return $("//*[@name='birthYear']")}
    get passportInputLabel() {return $("//*[@name='idNumber']")}
    get expirationPassportMonthDropdown() {return $("//*[@name='idExpirationMonth']")}
    get julyExpirationPassportMonth() {return $("//*[@name='idExpirationMonth']//*[@value='07']")}
    get passportExpirationDayLabel() {return $("//*[@name='idExpirationDay']")}
    get passportExpirationYearLabel() {return $("//*[@name='idExpirationYear']")}
    get addAditionalBaggageBtn() {return $("//*[@data-test='BaggagePickerBRBRedesign-Option-2']")}
    get continueBtn() {return $("//*[@data-test='StepControls-passengers-next']")}


    getEmailLabel(){
        return this.inputEmailLabel;
    }

    getPhoneNumberLabel(){
        return this.inputNumberLabel;
    }

    getFirstnameLabel(){
        return this.inputFirstnameLabel;
    }

    getLastnameLabel(){
        return this.inputLastnameLabel;
    }

    getNationalityLabel(){
        return this.nationalityLabel;
    }

    getCostaRicaDropdown(){
        return this.costaRicaLabelDropDownSelector;
    }

    getGenderDropDownSelector(){
        return this.genderDropDownSelector;
    }

    getMaleSelectorDropDown(){
        return this.selectMaleFromDropDown;
    }

    getDateOfBirthDropDown(){
        return this.dateOfBirthDropdown;
    }

    getSeptemberMonthFromDropDown(){
        return this.septemberMonthSelector;
    }

    getBirthDayInputLabel(){
        return this.birtdayInputLabel;
    }

    getBirthYearInputLabel(){
        return this.birthYearInputLabel;
    }

    getPassportInputLabel(){
        return this.passportInputLabel;
    }

    getExpirationPassportMonth(){
        return this.expirationPassportMonthDropdown;
    }

    getJulyExpirationPassportMonth(){
        return this.julyExpirationPassportMonth;
    }

    getPassportExpirationDayLabel(){
        return this.passportExpirationDayLabel;
    }

    getPassportExpirationYearLabel(){
        return this.passportExpirationYearLabel;
    }

    getAditionalBaggageBtn(){
        return this.addAditionalBaggageBtn;
    }

    getContinueBtn(){
        return this.continueBtn;
    }


    insertingInfoFunction(email, number, name, lastn, birthday, birtYear, passport, idExpDay, idExpYr){
        this.inputEmailLabel.setValue(email);
        this.inputNumberLabel.setValue(number);
        this.inputFirstnameLabel.setValue(name);
        this.inputLastnameLabel.setValue(lastn);
        this.getNationalityLabel().click();
        browser.pause(2000);
        this.getCostaRicaDropdown().click();
        this.getNationalityLabel().click();
        this.getGenderDropDownSelector().click();
        this.getMaleSelectorDropDown().click();
        this.getGenderDropDownSelector().click();
        this.getDateOfBirthDropDown().click();
        this.getSeptemberMonthFromDropDown().click();
        this.birtdayInputLabel.setValue(birthday);
        this.birthYearInputLabel.setValue(birtYear);
        this.passportInputLabel.setValue(passport);
        this.getExpirationPassportMonth().click();
        this.getJulyExpirationPassportMonth().click();
        this.passportExpirationDayLabel.setValue(idExpDay);
        this.passportExpirationYearLabel.setValue(idExpYr);
        this.getAditionalBaggageBtn().click();
        this.getContinueBtn().click();

    }

}


module.exports = new PassengerDetails();