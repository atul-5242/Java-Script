// JavaScript Chapter 2 - Practice Set on Operators and Conditionals | JavaScript Tutorial in Hindi #8

// Practice of switch case statement:->
// let a=17;
// switch(a){
//     case 18:  
//     consol.log("Yes");
//     break;
//     case 17:  
//     consol.log("No");
//     break;
//     default:  
//     consol.log("No");
//     break;
// }
// ------------------------------------------------------>
// switch (key) {
    //     case value:
    
    //         break;
    
    //     default:
    //         break;
    // }
    // ------------------------------------------------------>
    
let a=17;
    switch (a.toString()) {
        case '17':
                console.log("HIIIIII");
            break;
            case '2':
                console.log("2")
                break;
        default:
            break;
    }




// Use of ternary operator.
let age=18;
let output=age>=18?"You R elegible for drive":"Ypu R not";
console.log(output);