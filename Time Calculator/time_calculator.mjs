'use strict';

let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function addTime(start, duration, day=""){

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

    //check if minutes exceed 60 and add 1 to newHour if true
    if (newMinute >= 60) {
        newHour += 1;
        newMinute -= 60;
    }

    if (AM_PM == 'PM') {
        newHour += 12; //Add 12 to convert to 24hr clock system.
    }

    //next five lines implement the (next day/n days later) feature
    let dividend = newHour;
    let divisor = 24;
    
    let days = Math.floor(dividend / divisor); //return day.
    newHour = dividend % divisor; //return for next day.
    dayCount = days;

     //reference day input by user on array
    let startIndex = weekDays.indexOf(day.toLowerCase());

     //Derive new index, return new day
    let finalIndex = (startIndex + dayCount) % weekDays.length;

    //error catching
    if (finalIndex < 0) {
        finalIndex += weekDays.length;
    }

    let newDay = "";
    if(day !== "" && weekDays[finalIndex] !== undefined) {
        newDay = weekDays[finalIndex].charAt(0).toUpperCase() + weekDays[finalIndex].slice(1);
    } 

    //let newDay = weekDays[finalIndex];
    //let newDay = weekDays[finalIndex].charAt(0).toUpperCase() + weekDays[finalIndex].slice(1);

    //error handling in case undefined
    //if (newDay == undefined) {
    //newDay = "";
    //}

    //error handling if newHour is === to 0
    newHour == 0 ? newHour = 24 : newHour;

    let daysElapsed = "";

    if (dayCount > 1) {
        daysElapsed = " (" + String(dayCount) + " " + "days later" + ")"
    } else if (dayCount === 1) {
        daysElapsed = " (" + "next day" + ")";
    }

    //format minutes
    if (newMinute < 10) {
        newMinute = "0" + String(newMinute);
    } else {
        newMinute = String(newMinute);
    };

    //assign appropriate period (AM or PM)
    if (newHour >= 0 && newHour < 12) {
        AM_PM = "AM";
    }else if(newHour >= 12 && newHour <= 23) {
        AM_PM = "PM";
    }else if (newHour >= 24) {
        AM_PM = "AM";
    };

    //convert back to 12hrs if in 24hr system
    if (newHour > 12) {
        newHour -= 12;
    } else {
        newHour = newHour;
    };

    let newTime = "";
    if (day !== "") {
        newTime = newHour + ":" + newMinute + " " + AM_PM + ", " + newDay + daysElapsed;
    } else {
        newTime = newHour + ":" + newMinute + " " + AM_PM + daysElapsed;
    }
    //let newTime = newHour + ":" + newMinute + " " + AM_PM + daysElapsed;
    //let newTime = newHour + ":" + newMinute + " " + AM_PM + " " + newDay + daysElapsed;
    return newTime;
};