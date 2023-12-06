'use strict';

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function addTime(start, duration){

    //extract the start hour
    let startHour = start.match(/(\d\S*):/)[1];
    
    //extract the start min
    let startMin = start.match(/\d+(?= )/)[0];
    
    //extract the AM/PM
    let AM_PM = start.match(/\S[PM]/)[0];
    
    //extract duration_hours
    let durHour = duration.match(/\d\S*(?=:)/)[0];
    
    //extract duration_minutes
    let durMin = duration.match(/\d{2}$/)[0];

    let dayCount = 0;

    // Derive new time
    let newMinute = Number(startMin) + Number(durMin);
    let newHour = Number(startHour) + Number(durHour);

    if (AM_PM == 'PM') {
        newHour += 12; //Add 12 to convert to 24hr clock system.
    }

    let dividend = newHour;
    let divisor = 24;
    
    let days = Math.floor(dividend / divisor); //return day.
    newHour = dividend % divisor; //return for next day.

    dayCount = days;

    //check if minutes exceed 60 and add 1 to newHour if true
    if (newMinute >= 60) {
        newHour += 1;
        newMinute -= 60;
    }

    //format minutes
    if (newMinute < 10) {
        newMinute = "0" + String(newMinute);
    } else {
        newMinute = String(newMinute);
    };

    //assign appropriate perido (AM or PM)
    if(newHour >= 12) {
            AM_PM = "PM";
        } else {
            AM_PM = "AM";
        };

    //convert back to 12hrs if in 24hr system
    if (newHour > 12) {
        newHour -= 12;
    } else {
        newHour = newHour;
    };

    let newTime = newHour + ":" + newMinute + " " + AM_PM;
    return newTime;
};