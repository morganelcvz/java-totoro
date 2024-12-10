document.getElementById("showbutton").addEventListener("click", function () {
    let texte = document.getElementById("totoro-text").value
    document.getElementById("display-toto").innerText = texte
})

document.getElementById("colorbtnR").addEventListener("click", function () {
    document.getElementById("display-toto").style.color = 'red'
})

document.getElementById("colorbtnG").addEventListener("click", function () {
    document.getElementById("display-toto").style.color = 'green'
})

document.getElementById("colorbtnB").addEventListener("click", function () {
    document.getElementById("display-toto").style.color = 'blue'
})

