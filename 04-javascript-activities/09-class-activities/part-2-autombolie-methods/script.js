class AutoMobile {
    constructor(type, numOfWheels, color){
        this._type = type;
        this._numOfWheels = numOfWheels;
        this._color = color;
        this._isWorking = true;
    }

    // add a getter for each property that returns its value
    get type(){
        return this._type;
    }
    get numOfWheels(){
        return this._numOfWheels;
    }
    get color(){
        return this._color;
    }
    get isWorking(){
        return this._isWorking;
    }
    needATuneUp(tuneUp) {
        this._isWorking = false;
    }

    // add a method that changes isWorking to false and also prints to the console that it needs a tune up
}

const motorcycle = new AutoMobile(`Sport`, 2, `Black` );
// console.log a few of the getter methods and also run the method that changes isWorking to false

