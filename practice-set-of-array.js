// JavaScript Chapter 5 - Practice Set on Arrays | JavaScript Tutorial in Hindi #21
// 1.)
let arr=[1,2,3,4,5,6,7]
// console.log(arr)//-----------------
arr.push(8)//trying to use push function.
// console.log(arr)//-------------------


// 2.)
let arr2=[1,2,3,4,5,6,7,8,9,10,15,20,30]

const divisor_element_in_array=(num)=>{
    return num%10==0;
}

let a=arr2.filter(divisor_element_in_array);//1st way of writing.
// console.log(a)//------------------

//second way of writing that do same work.

let b=arr2.filter((num)=>{
    return num%10==0;
})

// console.log(b);//----------------------

// 3.)Create an array of square of a given number.



let b1=arr2.map((num)=>{
    return num*num
})

// console.log(b1)//----------------Important--------------

// 4.)We have given a set of n natural number and we have to print the value of factorial using reduce function.


let arr3=[1,2,3,4,5,6,7,8,9,10]
let temp=arr3.reduce((x1,x2)=>{
    return x1*x2;
})
// console.log(temp)//-------------------