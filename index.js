const array = {
    name: "ahmed" ,
    address: {
        street: 23,
        wow: 23,
    } ,
    hobbies: ["movies" , 'games' , 'nothing']

}

const todo = [
   { 
    id:112121,
    task:'nothing',
    completed:true
   } ,
   { 
    id:212,
    task:'nothing',
    completed:false
   } ,
   { 
    id:123,
    task:'nothing',
    completed:true
   }
]

const json = JSON.stringify(todo)

for(i=10; i >= 1 ; i = i - 1) {
    console.log(i) 
}
x=11

if (x>10 || x <10) {
    console.log('hello')
}

const todoCompleted = todo.filter(function(todos) {
    return todos.completed === true
}).map(function(todos){
    return todos.id
})

console.log(todoCompleted)

console.log(array.hobbies[1])
console.log(json)

