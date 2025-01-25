let ad = prompt("Enter your name")
let parol = prompt("Enter your pasword")

if(ad === "Ismayil" && parol === "ismayil1234"){
    document.getElementById("reg").innerHTML = "Ismayil, Welcome to our website"
} else if(ad === "Huseyn" && parol === "huseyn1234"){
    document.getElementById("reg").innerHTML = "Huseyn, Welcome to our website"
} else if(ad === "Heci" && parol === "heci1234"){
    document.getElementById("reg").innerHTML = "Heci, Welcome to our website"
} else if(ad === "Celal" && parol === "celal1234"){
    document.getElementById("reg").innerHTML = "Celal, Welcome to our website"
} else if(ad === "Fatima" && parol === "fatima1234"){
    document.getElementById("reg").innerHTML = "Fatima, Welcome to our website"
} else if(ad === "Elmaddin" && parol === "elmaddin1234"){
    document.getElementById("reg").innerHTML = "Elmaddin teacher, Welcome to our website"
} else{
    document.getElementById("reg").innerHTML = "Enter your username or password again."
}