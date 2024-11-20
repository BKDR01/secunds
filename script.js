let body = document.querySelector('body')
let h1 = document.querySelector('.h1')
let h2 = document.querySelector('.h2')
let h3 = document.querySelector('.h3')
function time(params) {
setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    h1.innerHTML = hours
    h2.innerHTML = minutes
    h3.innerHTML = seconds 
}, 1000);
}
time()
