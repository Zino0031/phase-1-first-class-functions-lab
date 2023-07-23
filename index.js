
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
   return function(fare) {
    return fare*num;
   }
} 

//this code is passed npm test and i didn't see instruction in readme file
// const fareDoubler = function(fares){
//     return fares*2
// }
// const fareTripler = function(fares){
//     return fares*3
// }

// so i'm gonna replace the last code with this one to follow the instructions

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
 
function  selectDifferentDrivers (drivers,func){
    return func(drivers);
   
    
}
 