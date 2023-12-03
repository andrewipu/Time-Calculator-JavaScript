'use strict';

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
    let durMin = duration.match(/\d+\d+/)[0];
    return durMin; //returns 12
}