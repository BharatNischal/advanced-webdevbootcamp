function countDown(seconds) {
    const runningTime = setInterval(() => {
        seconds--;
        if(seconds > 0) {
            console.log(`Timer: ${seconds}`);
        } else {
            console.log(`Ring Ring Ring!!!`);
            clearInterval(runningTime);
        }
    }, 1000);
}

countDown(10);
