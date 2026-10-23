

// FOR OF LOOP START 


// for of loop in array

const foodUnit = [10, 20, 30, 40, 50];

for (const unit of foodUnit) {
    console.log(unit);
}

// for of loop in string    

const family = "Smith";

for (const memChar of family) {
    console.log(memChar);
}


// for of loops for map method 

const myAy = new Map();

myAy.set("BD", "Bangladesh");
myAy.set("IN", "India");
myAy.set("JPN", "Japan");
myAy.set("UK", "United Kingdom");

for (const [key, value] of myAy) {
    console.log(key, value);
}
for (const [key,] of myAy) {
    console.log(key);
}
for (const [key, value] of myAy) {
    console.log(`Key Is ${ key } & Value Is ${ value }`);
} 

// FOR OF LOOP END 

