
const timer = document.getElementById('timer');

const timerId = setInterval(() => {
    const value = +timer.textContent;

    if (value > 0) {
        timer.textContent = value -1;
    } 
    
    else {
        clearInterval(timerId);
        window.alert("Вы победили в конкурсе!");
    }
    
    }, 100)


