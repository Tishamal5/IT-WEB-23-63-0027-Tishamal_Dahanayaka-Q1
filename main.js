document.addEventListener('DOMContentLoaded', (event) => {
    let numberElement = document.getElementById('number');
    let currentNumber = parseInt(numberElement.textContent);

    setInterval(() => {
        currentNumber += 1;
        numberElement.textContent = currentNumber;
    }, 3000); // 
});
