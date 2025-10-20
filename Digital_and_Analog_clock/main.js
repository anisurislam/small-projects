var container = document.getElementById("containers")
var fullScreenButton = document.getElementById("full_screen_button")

var dates = document.getElementById("dates")
var time = document.getElementById("time")

var hoursDiv = document.getElementById("hours")
var minutesDiv = document.getElementById("minutes")
var secondsDiv = document.getElementById("seconds")
var amOrPmDiv = document.getElementById("am_or_pm")

fullScreenButton.addEventListener("click", () => {
    if (fullScreenButton.innerText == "Enter Fullscreen") {
        container.requestFullscreen();
        fullScreenButton.innerText = "Exit Fullscreen"
    } else {
        document.exitFullscreen()
        fullScreenButton.innerText = "Enter Fullscreen"
    }
    }
)


setInterval(() => {
    let date1 = new Date();
    let date2 = new Date();
    let stylesForDate = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    let clockForDate = date1.toLocaleDateString("en-us", stylesForDate)
    dates.innerHTML = clockForDate;



    let dateHours = date2.getHours();
    let dateMinutes = date2.getMinutes();
    let dateSeconds = date2.getSeconds();

    if (dateHours > 12) {
        dateHours = `${dateHours - 12}`
        amOrPmDiv.innerText = "PM"
    } else if (dateHours == 12) {
        amOrPmDiv.innerText = "PM"
    } else if (dateHours == 0) {
        dateHours = 12
        amOrPmDiv.innerText = "AM"
    } else {
        dateHours = dateHours;
        dateMinutes = date2.getMinutes();
        dateSeconds = date2.getSeconds();
        amOrPmDiv.innerText = "AM"
    };
    if (dateHours < 10) {
        dateHours = `0${dateHours}`
    }
    if (dateMinutes < 10) {
        dateMinutes = `0${dateMinutes}`
    }
    if (dateSeconds < 10) {
        dateSeconds = `0${dateSeconds}`
    }
    hoursDiv.textContent = dateHours;
    minutesDiv.textContent = dateMinutes;
    secondsDiv.textContent = dateSeconds;

}, 1000)
