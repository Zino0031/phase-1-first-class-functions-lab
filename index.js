
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

const fareDoubler = function(fares){
    return fares*2
}
const fareTripler = function(fares){
    return fares*3
}
 
function  selectDifferentDrivers (drivers,func){
    return func(drivers);
   
    
}
 