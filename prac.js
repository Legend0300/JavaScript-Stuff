// try{
//     console.log(hello)
// }
// catch(err)
// {
//     console.log(err)
// }

// console.log("this works")

// function addTwoNums(a , b)
// {
//     try
//     {
//         if(typeof(a) != "number")
//         {
//             throw new ReferenceError("a is not a number")
//         }
//         else if(typeof(b) != "number")
//         {
//             throw new ReferenceError("b is not a number")
//         }
//         else
//         {
//             console.log(a + b)
//         }
//     }
//     catch(err){
//         console.log("Error! " , err)
//     }
// }

// addTwoNums(5 , 5)
// console.log("still works")




function letterfinder(word , match)
{

    if(word.length >= 2 && match.length == 1 && typeof(word) == "string")
    {
        for(i = 0; i <= word.length ; i++)
        {
            if(word[i] == match)
            {
                console.log("found" , word[i] , " in " , word)
            }
        }
    }
    else
    {
        console.log("enter valid arguments")
    }


}

letterfinder("catto" , "o")


var null1 = null
console.log(null1)