// Write a JavaScript program to display the current day and time in the 
// following format.

let now = new Date();
let dayName = ["Sunday", "Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"]
let day = now.getDay()
let hour = now.getHours()
let min = now.getMinutes()
let ampm = "ap"
if(hour < 12){
    hour = hour + " AM"
    if(hour < 10){
        hour = "0"+ hour
    }
}
else if (hour > 12){
    hour = hour - 12
    hour = hour + " PM"
    if(hour < 10){
        hour = "0"+ hour
    }
}
console.log("Today is : "+ dayName[day])
console.log(`Current time is : ${hour} : ${min} : ${now.getMilliseconds()}`)