// জেসনে কোনভার্ট করার সিস্টেম এবং অউটপুট 
const student = {
    name:'rubel',
    age:35,
    university:'Bangladesh national University',
    information:{studentFastName:'rubu',studentAddress:'Dhaka Bashaboo'}
}
const convertJson = JSON.stringify(student)
console.log(convertJson)//OUTPUT {"name":"rubel","age":35,"university":"Bangladesh national University","information":{"studentFastName":"rubu","studentAddress":"Dhaka Bashaboo"}}

console.log(student) /*{
    name: 'rubel',
    age: 35,
    university: 'Bangladesh national University',
    information: { studentFastName: 'rubu', studentAddress: 'Dhaka Bashaboo' }
  }*/

//   কিভাবে জেসন কে পার্স করতে হয় 
const jsonPars = JSON.parse(convertJson)
console.log(jsonPars)

/*----------------------------------------------*/

// KEYS AND VALUES 
const keyss = Object.keys(student)
const valuess = Object.values(student)
console.log(keyss)
console.log(valuess)

// ADD OR REMOVE ARRAY 
// ADD
const myObject = [
    {name:'laptop',price:34543,brand:'hp',color:'black'},
    {name:'mobile',price:70000,brand:'OnPlus',color:'Golden'},
    {name:'Camara',price:80000,brand:'canon',color:'gry'},
    {name:'watch',price:9000,brand:'casio',color:'yellow'},
    {name:'computer',price:100000,brand:'custom',color:'black'}
]

const newProduct = {name:'webCame',price:2000,brand:'nicon',color:'red'}

const updateProduct = [...myObject,newProduct]
console.log(updateProduct)
// REMOVE 
const removeElement = myObject.filter(product => product.name !== 'mobile')
console.log(removeElement)