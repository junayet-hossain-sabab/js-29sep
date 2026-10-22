

// WHILE LOOP 

let index = 0

while (index <= 10) {
    // console.log(` Value Of Index Is : ${index}`)
    index = index + 2
}


// WHILE LOOP IN ARRAY 

let myArray = ["HTML", "CSS", "JavaScript"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`Value Of Array ---> ${myArray[arr]}`)
    // arr = arr + 1 this also works
    arr++
}

// DO WHILE LOOP


let mark = 100

do {
    console.log(`Value Of Exam Is : ${mark}`);
    // mark = mark++ Here i made a mistake in this line, it will not work because mark++ will return the value of mark before
    // incrementing it, so it will always be 100 and the loop will run infinitely.
    mark++
}
while (mark < 101)