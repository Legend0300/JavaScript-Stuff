

function OnSumbit(e) {
    if (name1.value === "" || email1.value === "") {
        alert("enter all fields please :(")
    } 
    else {

        console.log("success")
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(`Email: ${email1.value} | Name: ${name1.value}`))
        
        userList.appendChild(li)

        name1.value = ""
        email1.value = ""
        e.preventDefault()

    }
        
}

const name1 = document.getElementById("name");
const form = document.getElementById("form")
const email1 = document.getElementById("email");
const button = document.getElementById("btn")
const userList = document.getElementById("users")

form.addEventListener("submit" , OnSumbit);
