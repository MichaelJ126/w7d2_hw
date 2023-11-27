console.log('homework')


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


const favoriteFoods = (person => {
    for(let key in person) {
        const value = person[key]
        const sent = `My favorite ${key} is ${value}`
        
        console.log(sent)
        if(typeof value == "object" && !Array.isArray(value)) {
            favoriteFoods(value)
        }
    }

})

favoriteFoods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name
    this.age = age

    this.printInfo = ()=> {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
    this.addAge = (num)=> {
        this.age += num

    }
}

const p1 = new Person("Jean", 9000)
const p2 = new Person("Michael", 8700)
p1.printInfo()
p1.addAge(20)
p1.printInfo()
p2.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function promiseBased(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve(string);
        } else {
            reject(string);
        }
    })
}

promiseBased("Words")
    .then((results) => {
        console.log(`Big Word: ${result}`)
    })
    .catch((error) => {
        console.log(`Smaller Number: ${error}`)
    })



    // ============= Codewars ================

// 1.

    // def double_char(st):
    //     ans = ''
    //     for s in st:
    //         ans += s + s
    //     return ans


    function doubleChar(str) {
        let result = '';
        for (let s = 0; s < str.length; s++) {
            result += str.charAt(s) + str.charAt(s);
        }
    }
        return result;

// 2. 

// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4



function findMean(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum/numbers.length;
}

