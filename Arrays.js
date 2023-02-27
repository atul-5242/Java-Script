// Here Array is same as python having list. 


// Arrays are mutable.
/*
let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)
*/



// JavaScript Array Methods | JavaScript Tutorial in Hindi #17
let a=[1,2,3,4,5,6]
console.log(a)

let b=a.toString()
console.log(b,typeof b)//a is now converted into string. by using the function toString.     

// for joining some element(or word like:- _ and) between every element in array that are seperated by the , (comma)  
let c=a.join("_")
console.log(c,typeof c)     

let r=a.pop()//pop last element and pop function returns the last element. 
console.log(a,r)

// push---------------------->

// push moidfed the array by joining the lement at the last and rerturn the incresed length of array.

let q=a.push(78)
console.log(a,q)



// Shift:------MODIFIES THE ORIGINAL ARRAY From the starting---------------->

let w=a.shift()
console.log(a,"W:",w)


let t = a.unshift(78)//add element in the beginning of the array.
console.log("a:",t, a)




// Some More JavaScript Array Methods | JavaScript Tutorial in Hindi #18:---------------------->

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
// let newNum = num.slice(3, 5)
// console.log(newNum)









// My:code:------------------------------->

console.log("From now onwards we are going to learn more methods.")

let num=[1,2,3,4,5,6,7,8,9,10]
console.log(num.length)//l2
delete num[0]
console.log(num.length)//l1
// In both l2==l1 it is in this language.
let a1=[1,3,4,1,5,76]
let a2=[45,3,3,34,2,2,4,2,2]
let a3=[45,3,3,34,2,2,4,2,2]
let newArray_here1=a1.concat(a2,a3);//it can take more than one argument.
let newArray_here=a1.concat(a2);
console.log(newArray_here)


// sort method sort in alphabetically:-------------------------------->

l1=[3,1,141,3,2,,5,765,7,435,34,8]
l1.sort()
console.log(l1)//sort in alphabetically order.


// if I want to sort in assending or decending order than we have to sort by using to give a function to sort function as an argument.

let compare=(a,b)=>{
    // return a-b//assending
    return b-a//decending
}
console.log(l1.sort(compare))


l1.reverse()

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
// let newNum = num.slice(3, 5)
// console.log(newNum)
