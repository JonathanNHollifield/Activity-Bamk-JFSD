// create a factory function that sets some default values and also uses property value shorthand
const TMNT = (Name, Weapon, ColorOfGear) => {
        const Turtle = {
            Name,
            Weapon,
            ColorOfGear,
            StudentOfSplinter: true
        }
        return Turtle
}

const Michelangelo = TMNT( "Nun-Chucks","Michelangelo", "Orange");
const Leonardo = TMNT("Leonardo", "Katana", "Blue");
const Donatello = TMNT("Donatello", "Bo-Staff", "Purple");
const Raphael =TMNT("Raphael", "Sai's", "Red");


console.log(Leonardo);
console.log(Donatello);
console.log(Michelangelo);
console.log(Raphael);