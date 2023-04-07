// create an object that has 2 properties with a getter and setter for each one. Use the privacy syntax for the key: value pairs
const tempWeather = {
    _timeRecent: 1621,
    _tempRecent: "69'f",

    get tempNow(){
            return this._tempRecent;

    },
    set tempNow(newTemp){
      this._tempRecent = newTemp;
    }
}

tempWeather.tempNow = "65'f"
console.log(tempWeth.tempNow)

