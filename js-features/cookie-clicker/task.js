
const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");

image.onclick = function() {
    image.width = 400;
    count.textContent = +count.textContent + 1;
    if (count.textContent % 2 == 0){
        image.width = 200;  
    }
    if (count.textContent > 40){
        count.textContent = 0; 
    };
}

