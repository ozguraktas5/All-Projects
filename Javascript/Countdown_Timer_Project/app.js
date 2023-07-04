const getTimeUntil = (targetDate) => {
    const currentDate = new Date();
    const timeDifferance = targetDate - currentDate;

    const days = Math.floor(timeDifferance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDifferance / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(timeDifferance / (1000 * 60)) % 60;
    const seconds = Math.floor(timeDifferance / 1000) % 60;

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

const updateTimer = () => {
    const targetDate = new Date('2023-07-07T15:00:00');

    const timeUntilTarget = getTimeUntil(targetDate);

    document.getElementById('day').innerText = timeUntilTarget.days;
    document.getElementById('hour').innerText = timeUntilTarget.hours;
    document.getElementById('minute').innerText = timeUntilTarget.minutes;
    document.getElementById('sec').innerText = timeUntilTarget.seconds;
}

setInterval(updateTimer,1000);