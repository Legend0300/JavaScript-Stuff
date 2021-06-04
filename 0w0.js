// using map , reduce , sort and filter  forEach functions

const Names = ["ahmed" , "ali" , "no one"]

Names.push("Ahmed")
console.log(Names)

const Career = [
    "start" , 1800 ,
    "end" , 1900
]
const career =  Career.map(function(year) {
    return year * 2
});
console.log(career)