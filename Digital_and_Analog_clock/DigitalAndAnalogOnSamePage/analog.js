var hourPointer = document.getElementById("hour_pointer")
var minutePointer = document.getElementById("minute_pointer")
var secondPointer = document.getElementById("second_pointer")
var container = document.getElementById("containers")
var fullScreenButton = document.getElementById("full_screen_button")

let date3 = new Date();
hourPointer.style.transform = `rotate(${((30 * date3.getHours()) + (date3.getMinutes() / 2)) + (date3.getMinutes() / 30)}deg)`
minutePointer.style.transform = `rotate(${6 * date3.getMinutes() + (date3.getSeconds() / 10)}deg)`
secondPointer.style.transform = `rotate(${6 * date3.getSeconds()}deg)`

var hourPointerRotation = 30 / 3600
var minutePointerRotation = 6 / 60
var secondPointerRotation = 6


setInterval(() => {



    hourPointer.style.transform += `rotate(${hourPointerRotation}deg)`
    minutePointer.style.transform += `rotate(${minutePointerRotation}deg)`
    secondPointer.style.transform += `rotate(${secondPointerRotation}deg)`

}, 1000)

