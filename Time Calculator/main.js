//? 1. I need an array to hold the days of the week.
//? 2. Main function will have three parameters. StartTime, duration, and an optional one called days.
    //? days is there in case the user wants to give a day of the week in addition to the time.
//? 3. To parse the input, Regex is advised.
//? 4. Simply put - the function should add the duration time to the start time and return the result.
//? 5. If the result lands on the next day then the output should indicate "next day".
//? 6. If the result is several days later then the output should indicate "n days later"
//? 7. Day of the week should appear after the time and before the number of days later.

import { addTime } from "./time_calculator";

console.log(addTime("3:30 PM", "2:12")); //should return 5:42 PM


//export above functions
module.exports = {
    //add
};