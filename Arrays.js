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
