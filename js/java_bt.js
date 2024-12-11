document.getElementById("showbutton").addEventListener("click", function () {
    let texte = document.getElementById("totoro-text").value
    document.getElementById("display-toto").innerText = texte
})

//document.getElementById("btnR").addEventListener("click", function () {
//    document.getElementById("display-toto").style.color = 'red'
//})

//document.getElementById("btnG").addEventListener("click", function () {
//    document.getElementById("display-toto").style.color = 'green'
//})

//document.getElementById("btnB").addEventListener("click", function () {
//    document.getElementById("display-toto").style.color = 'blue'
//})

document.getElementById("btnR").addEventListener("click", function () {
    document.querySelector("#display-toto").removeAttribute("class")
    document.querySelector("#display-toto").classList.add("text-danger")
})

document.getElementById("btnG").addEventListener("click", function () {
    document.querySelector("#display-toto").removeAttribute("class")
    document.querySelector("#display-toto").classList.add("text-success")
})

document.getElementById("btnB").addEventListener("click", function () {
    document.querySelector("#display-toto").removeAttribute("class")
    document.querySelector("#display-toto").classList.add("text-primary")
})


document.getElementById("cancelbutton").addEventListener("click", function () {
    let texte = document.getElementById("totoro-text").value = ""
    document.getElementById("display-toto").innerText = ""
})