window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
const promise = new Promise((resolve) => {
const randomTime = Math.floor(Math.random() * 5 + 1) * 1000; // Random time between 1 and 5 seconds
setTimeout(() => {
resolve(`Promise ${i + 1} resolved after ${randomTime / 1000} seconds`);
}, randomTime);
});

window.promises.push(promise);
}

Promise.any(window.promises)
.then((result) => {
document.getElementById("output").innerText = result;
})
.catch((error) => {
console.log(error);
});






