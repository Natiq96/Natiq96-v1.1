
var exitIcon = document.getElementById("exit")
var solidBar = document.getElementById("solidbar")
var solidbarIcon = document.getElementById("solidbar-icon-open")
var developers = document.getElementById("dev")

exitIcon.addEventListener("click",function(){
    solidBar.style.display = "none"
    solidBar.style.transition = "1s"
    developers.style.display = "flex"
})

solidbarIcon.addEventListener("click",function(){
    solidBar.style.display = "flex"
    solidBar.style.transition = "1s"
    developers.style.display = "none"

})