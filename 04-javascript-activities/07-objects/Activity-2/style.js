let denverBootCamp = {
    team: {
        instructor: {
            name: 'Robert Anderson',
            city: 'Bend',
            catchPhrase () {
                console.log("Don't forget to turn your camera's on please.");
            }
        },
        teachingAssistants: {
            male: {
                name: 'Andrew Bergstrom',
                city: 'Seattle',
                catchPhrase () {
                    console.log("Let's go back to our wheel of names!");
                }
            },
            female: {
                name: 'Stephany Bolivar',
                city: 'Brooklyn',
                catchPhrase () {
                    console.log("Woot Woot");
                }

            },
             students: {
                name: 'Jonathan',
                city: 'Atlanta',
                catch
            }
<<<<<<< HEAD
            

    }
}


// 1. After the 'team' property, add a 'students' property.
//   -This should hold an object.
// 2. Next, insert your information of name & city. 
//   -Include a method using the new ES6 syntax that will console.log() your favorite movie phrase.
// 3. Display in the console the denverBootCamp object. 
// 4. Without manually typing it in, add a new classmate into the object and ask them their favorite movie phrase.
// 5. Do step 4 two(2) more times.
// 6. In the console, display the denverBootCamp object again.
// 7. Delete one of your classmates and display in the console. 
// 8. In the console, display the third classmate in your lists favorite movie quote. 
=======
        }
    },
    students: {
        name: 'Renan',
        city: 'Unknow',
        catchPhrase () {
            console.log('N/a');
        }
    }
}

console.log(denverBootCamp);
denverBootCamp.students.catchPhrase = "";
console.log(denverBootCamp);
>>>>>>> 1df4b43d9e03218260aa7e43cc18893b601cdbf7
