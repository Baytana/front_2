let counterValue = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
    counterElement.textContent = counterValue;
    if (counterValue > 0) {
        counterElement.style.color = 'green';
    } else if (counterValue < 0) {
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'gray';
    }
}
function increment() {
    counterValue++;
    updateCounter();
}
function reset() {
    counterValue = 0;
    updateCounter();
}
function decrement() {
    counterValue--;
    updateCounter();
}
updateCounter();