

const getRandomEvent = () =>{
    const random = Math.floor(Math.random() * 3);
    
    if (random === 0){
        console.log("today we will be doing: ");
        return "Marathon";
    } else if (random === 1) {
        console.log("today's program is doing: ");
        return "Weightlifting";
    } else if (random === 2) {
        console.log("today in gym we will be doing: ");
        return "cross Fit";
    } 
};

const getTrainingDays = (event) => {
    let days = '';
    if (event === "Marathon") {
        days = 10;
    } else if (event === "Weightlifting") {
        days = 31;
    } else if (event === "cross Fit"){
        days = 15;
    }
    return days;
}

const logEvents = (name, event) => {
    console.log(name + "'s event is: " + event);
}

const logTime = (name, days) => {
    console.log(name +"'s time for training is: " + days);
}

const event = getRandomEvent();
console.log(event);
const days = getTrainingDays(event);
const name = 'Nancy';
logEvents(name,event);
logTime(name,days);

const event2 = getRandomEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Hilde';

logEvents(name2, event2);
logTime(name2, days2);