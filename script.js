// assign variables
var hour9 = document.querySelector("#hour-9");
var hour10 = document.querySelector("#hour-10");
var hour11 = document.querySelector("#hour-11");
var hour12 = document.querySelector("#hour-12");
var hour13 = document.querySelector("#hour-13");
var hour14 = document.querySelector("#hour-14");
var hour15 = document.querySelector("#hour-15");
var hour16 = document.querySelector("#hour-16");
var hour17 = document.querySelector("#hour-17");

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//changed text content of selected variable 'currentDay'
$("#currentDay").text(moment().format('LL'));

// change the time to an array
var currentHr = moment().toArray();
// console.log(moment().toArray());

// create variables to compare to moment.js
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// created variable to put the hour blocks into an array 
var hoursBlock = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

// create loop that compares the current time to the hours
for (var i = 0; i < hours.length; i++) {
    //if hours is greater than current time 
    if (hours[i] > currentHr[3]) {
        // then change the background to green (class: future)
        $(hoursBlock[i]).addClass("future"); 
        
    }
    
    //if hours is the same as the current time 
    else if (hours[i] == currentHr[3]) {
        // then change the background to red (class: present)
        $(hoursBlock[i]).addClass("present"); 
    }
    
    //if hours is greater than current time 
    else {
        // then change the background to grey (class: past)
        $(hoursBlock[i]).addClass("past"); 
        
        
    }

};

