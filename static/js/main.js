var exitIcon = document.getElementById("exit")
var solidBar = document.getElementById("solidbar")
var solidbarIcon = document.getElementById("solidbar-icon-open")
var homePage = document.getElementById("homepage")

exitIcon.addEventListener("click",function(){
    solidBar.style.display = "none"
    solidBar.style.transition = "1s"
    homePage.style.display = "flex"

})

solidbarIcon.addEventListener("click",function(){
    solidBar.style.display = "flex"
    solidBar.style.transition = "1s"
    homePage.style.display = "none"

})