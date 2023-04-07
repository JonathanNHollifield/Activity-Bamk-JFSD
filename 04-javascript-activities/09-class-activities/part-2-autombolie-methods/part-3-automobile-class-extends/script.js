class AutoMobile {
    
    constructor(type, numOfWheels, color){
        this._type = type;
        this._numOfWheels = numOfWheels;
        this._color = color;
        this._isWorking = true;
    }

    get type(){
        return this.type;
    }
    get numOfWheels(){
        return this.numOfWheels;
    }
    get color(){
        return this.color;
    }
    get isWorking(){
        return this.isWorking;
    }


    needsTuneUp(){
        this.isWorking = false;
        console.log("This vehicle needs a tune up");
    }

}

// create a child class that extends the parent class, for example a "Truck" class
class Truck extends AutoMobile {
    constructor(type, numOfWheels, color, numOfDoors, typeOfTransmission){
        super(type, numOfWheels, color);
        this._numOfDoors = numOfDoors;
        this._typeOfTransmission = typeOfTransmission;
    }
}
// This class should have 5 parameters, the first 3 being the same as the parent class: type, numOfWheels, color.
// The second two are up to you. They could be: numOfDoors, towingCapacity.
// Also, create a method that is unique to the child class. For example a method called canItTowIt(trailerWeight){} that checks if the towing capacity is greater then the number passed into the method.
// after you create the child class, create an instance of the class and console.log it and run the method you created.