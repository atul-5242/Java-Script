// Map, Filter & Reduce in JavaScript | JavaScript Tutorial in Hindi #20


arr=[1,2,3,4,5,6,7]
let a=arr.map((value,index,array)=>{
    // console.log(value,index,array)//---------------------
    return value+1;
    //new array is created by the values that are returned.
    //we re adding 1to make diffrent array.
})//this will print all the element.

//map will make a new array and return a new arr.
// console.log(a);//------------------

// Arguments of map function:----------->
// map(value,index,array)



// Filter Method:-------------------->
let arr2=[45,23,4,6,34,4,6,4];
let a2=arr2.filter((atul)=>{
    return atul<10;
})

// console.log(a2)//---------------------

//filter and map not changed the original array.


// Array reduce metho:------------->

let arr3=[1,2,3,4,5,6,7,8,9,10]
const fun=(h1,h2)=>{
    return h1+h2
}
let new_arr_by_passing_fun_as_argument=arr3.reduce(fun)//point1.)

let new_arr=arr3.reduce((h1,h2)=>{
    return h1+h2
})//point2.)

//point 1. and 2. both doing same things. 

// console.log(new_arr)//-------------------------
// console.log(new_arr_by_passing_fun_as_argument)//-------------------------