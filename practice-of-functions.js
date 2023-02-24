// JavaScript Chapter 3 - Practice Set on Loops and Functions | JavaScript Tutorial in Hindi #12

// let mark={
//     "harry":76,
//     "atul":67,
//     "ashima":100,
//     "Quine":90,
//     "Potter":120,
// }


let student_details={
    harry:76,
    atul:67,
    ashima:100,
    Quine:90,
    Potter:120,
}

// for(let i=0;i<Object.keys(student_details).length;i++){

//     console.log("The Mark of "+Object.keys(student_details)[i]," is "+student_details[Object.keys(student_details)[i]]);

// }

// This is the key:-------------------->Object.keys(student_details)[i]
// This is the value:------------------>student_details[Object.keys(student_details)[i]]

// console.log(Object.keys(student_details));               //IMPORTANT MOST.


// console.log(Object.keys(student_details).length);      //IMPORTANT MOST.


/*
// ---------------------------Now ''for in loop'' helps in so many ways in such a manner such that it reduces the code in simple way:------------------------->

for (const key in student_details) {
//    console.log(key)+" ";
//    console.log(student_details[key]);
console.log("The Mark of "+key," is "+student_details[key])
}



*/




// we have to create a function to find the mean:------------------->

const mean=(n1,n2,n3,n4)=>{
    return (n1+n2+n3+n4)/4;
}

console.log(mean(1,2,3,4));