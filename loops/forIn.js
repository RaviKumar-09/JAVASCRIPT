const person = {fName :"Ravi", lName :"Kumar", age :22};
for (let i in person){
    console.log(person[i])
}



const array = [1,3,4,6,7,9,0,7,7,8,9,9,0,0]

for (let i in array){
    console.log(array[i])
}



const numbers = [12,3445,8997,9,0,9];

for (let i in numbers){
    console.log(numbers[i])
}
/*let txt = "";*/
numbers.forEach(myFunction);

function myFunction(value, index, array){
    value = 0
    index = 0
    array = 0
    console.log(value)
}
myFunction()