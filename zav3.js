document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-timer");
    const timerOutput = document.getElementById("timer-output");
    
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    startButton.addEventListener("click", () => {
        timerOutput.textContent = "Очікування...";
        wait(2000).then(() => {
            timerOutput.textContent = "Час вийшов!";
        });
    });
});