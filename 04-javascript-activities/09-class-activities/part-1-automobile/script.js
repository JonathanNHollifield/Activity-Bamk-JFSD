// create a class called AutoMobile, 
// this class should have a constructor that accepts 3 parameters: type, numOfWheels, color.
// each automobile created should also have a default key of isWorking with a value set to true.
// after creating the AutoMobile class, create 3 different instances (objects) of your class and print them to the console.

class autoMobile {
    constructor(type, numOfWheels, color){
        this._type = type;
        this._numOfWheels = numOfWheels;
        this._color = color;
        this._isWorking = true;
    }
}
