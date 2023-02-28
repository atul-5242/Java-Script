let num=[1,2,9,3,5]


// classical for loop:----------------------->

// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element)
// }


// for easy for loop chalne ke liye:------->
// we can use for each loop

num.forEach((element)=>{
    console.log(element*element)//remeber the syntaxt.
})

// when we are buliding the website then we have to use dome at that point we have have to convert HTML collection into array then we can not use forEach loop we have to use array.form to convert Html collections into array than we can use the forEach loop.

let myname="Atul"
let arr=Array.from(myname)
console.log(arr)//to convert into array.

// We understand for in loop for objects and now we are going to understand for Array. 

// for in:---------------------:
// like:->
let array_of_num=[1,2,3,5,6,7]
for(let i in array_of_num)
{
    console.log(i)//way of accessing the key of the array by using the for in loop which is the key is -> indexes
    console.log(array_of_num[i])//the way of accessing th evalue of the array using the forin loop.
}

// for of:-------------------------->

for(let i of array_of_num){
    console.log(i)//it directly prinit the value so more prefarable for ccessing the value of the array.
}


