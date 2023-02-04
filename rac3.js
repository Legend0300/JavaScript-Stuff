const car = {
    p1: "hello" , 
    p2: "hello2" ,
    p3: "hello3"
}

console.log(car)

for(prop in car)
{
    console.log(prop + " : " + car[prop])
}


for(prop of Object.keys(car))
{
    console.log(prop + " : " + car[prop])
}