function Average(x,y){
    return (x+y)/2;
}

let a=Average(3,8);
console.log(Math.round(a))//A Math in bulid function round .
console.log(a)


// Another way of writing function.:------------------------------->
const sum=(p,q)=>{
    //important.
    return p+q;
}

console.log(sum(3,4))


// way of creating function without any argument.

const hello=()=>{//arrow function : another vway of writin functions in java script.
    console.log("This is the new world.")
}
hello();