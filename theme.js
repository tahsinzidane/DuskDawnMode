console.log('hello world');

function applyClassList() {
    document.body.classList.add('night-mode');
}

function removeClassList() {
    document.body.classList.remove('night-mode');
}

function executeAtFixedTime() {
    const now = new Date();
    const targetTimeMorning = new Date();
    const targetTimeEvening = new Date();

    targetTimeMorning.setHours(6, 0, 0, 0);
    targetTimeEvening.setHours(18, 0, 0, 0);

    let timeDifference;

    if (now < targetTimeMorning) {
        timeDifference = targetTimeMorning - now;
        setTimeout(() => {
            removeClassList();
            executeAtFixedTime();
        }, timeDifference);
    } else if (now < targetTimeEvening) {
        timeDifference = targetTimeEvening - now;
        setTimeout(() => {
            applyClassList();
            executeAtFixedTime();
        }, timeDifference);
    } else {
        // If it's after 6:00 PM, schedule for 6:00 AM the next day
        targetTimeMorning.setDate(targetTimeMorning.getDate() + 1);
        timeDifference = targetTimeMorning - now;
        setTimeout(() => {
            removeClassList();
            executeAtFixedTime();
        }, timeDifference);
    }
}

// Define target times before initial call
const now = new Date();
const targetTimeMorning = new Date();
const targetTimeEvening = new Date();

targetTimeMorning.setHours(6, 0, 0, 0);
targetTimeEvening.setHours(18, 0, 0, 0);

// Initial call to apply or remove class based on current time
if (now >= targetTimeEvening || now < targetTimeMorning) {
    applyClassList();
} else {
    removeClassList();
}

executeAtFixedTime();
