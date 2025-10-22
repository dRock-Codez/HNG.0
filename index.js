function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

updateTime();
setInterval(updateTime, 1000);