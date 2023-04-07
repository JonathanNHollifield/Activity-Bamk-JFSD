// create an object with 3 properties and a method. Display all 3 properties in the method.

const JohnnyFive = {
    who: "I'am Johnny Five",
    movie: "Short Circuit",
    alive: true,

    displayInfo(){
        return console.log(`Hello! ${this.who}, I was in the movie ${this.movie} my favorite catchphrase is Johnny 5 is alive!!! which is ${this.alive}`)
    }
}
JohnnyFive.displayInfo()